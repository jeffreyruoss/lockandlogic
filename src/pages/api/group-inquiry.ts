import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { resend } from '../../lib/resend';
import { verifyTurnstile } from '../../lib/turnstile';
import { checkRateLimit } from '../../lib/rate-limit';
import { sanitize, isValidEmail, isHoneypotTriggered } from '../../lib/validate';
import { groupInquiryEmailHtml } from '../../lib/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const formData = await request.formData();

    if (isHoneypotTriggered(formData)) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const turnstileToken = formData.get('cf-turnstile-response') as string;
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken, clientAddress))) {
      return new Response(
        JSON.stringify({ error: 'Spam check failed. Please try again.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!import.meta.env.DEV) {
      if (!(await checkRateLimit(clientAddress, 'group_inquiry', 5))) {
        return new Response(
          JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const name = sanitize(formData.get('name') as string || '');
    const company = sanitize(formData.get('company') as string || '');
    const email = sanitize(formData.get('email') as string || '');
    const phone = sanitize(formData.get('phone') as string || '');
    const group_size = sanitize(formData.get('group_size') as string || '');
    const event_type = sanitize(formData.get('event_type') as string || '');
    const preferred_date = sanitize(formData.get('preferred_date') as string || '');
    const message = sanitize(formData.get('message') as string || '');

    if (!name || !company || !email) {
      return new Response(
        JSON.stringify({ error: 'Name, company, and email are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = { name, company, email, phone, group_size, event_type, preferred_date, message };

    await supabase.from('form_submissions').insert({
      form_type: 'group_inquiry',
      data,
      ip_address: clientAddress,
    });

    await resend.emails.send({
      from: `Lock & Logic <noreply@lockandlogic.com>`,
      to: import.meta.env.NOTIFICATION_EMAIL.split(',').map((e: string) => e.trim()),
      replyTo: email,
      subject: `New Group Inquiry: ${company} (${name})`,
      html: groupInquiryEmailHtml(data),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Group inquiry error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
