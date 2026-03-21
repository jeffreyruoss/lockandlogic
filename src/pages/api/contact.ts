import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { resend } from '../../lib/resend';
import { verifyTurnstile } from '../../lib/turnstile';
import { checkRateLimit } from '../../lib/rate-limit';
import { sanitize, isValidEmail, isHoneypotTriggered } from '../../lib/validate';
import { contactEmailHtml } from '../../lib/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const formData = await request.formData();

    // Honeypot — silent success so bots think it worked
    if (isHoneypotTriggered(formData)) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Turnstile verification
    const turnstileToken = formData.get('cf-turnstile-response') as string;
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken, clientAddress))) {
      return new Response(
        JSON.stringify({ error: 'Spam check failed. Please try again.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Rate limiting (skip in dev — clientAddress is always 127.0.0.1)
    if (!import.meta.env.DEV) {
      if (!(await checkRateLimit(clientAddress, 'contact', 5))) {
        return new Response(
          JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate
    const name = sanitize(formData.get('name') as string || '');
    const email = sanitize(formData.get('email') as string || '');
    const phone = sanitize(formData.get('phone') as string || '');
    const message = sanitize(formData.get('message') as string || '');

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = { name, email, phone, message };

    // Log to Supabase
    await supabase.from('form_submissions').insert({
      form_type: 'contact',
      data,
      ip_address: clientAddress,
    });

    // Send email notification
    await resend.emails.send({
      from: `Lock & Logic <noreply@lockandlogic.com>`,
      to: import.meta.env.NOTIFICATION_EMAIL.split(',').map((e: string) => e.trim()),
      replyTo: email,
      subject: `New Contact Form: ${name}`,
      html: contactEmailHtml(data),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
