import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { verifyTurnstile } from '../../lib/turnstile';
import { checkRateLimit } from '../../lib/rate-limit';
import { sanitize, isValidEmail, isHoneypotTriggered } from '../../lib/validate';
import { subscribeToMailchimp } from '../../lib/mailchimp';
import { resend } from '../../lib/resend';

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
      if (!(await checkRateLimit(clientAddress, 'newsletter', 3))) {
        return new Response(
          JSON.stringify({ error: 'Too many attempts. Please try again later.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const email = sanitize(formData.get('email') as string || '');

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Log to Supabase first (always capture the submission)
    const mailchimpResult = await subscribeToMailchimp(email);

    await supabase.from('form_submissions').insert({
      form_type: 'newsletter',
      data: { email, mailchimp_success: mailchimpResult.success },
      ip_address: clientAddress,
    });

    if (!mailchimpResult.success) {
      // Notify about the failure
      await resend.emails.send({
        from: 'Lock & Logic <noreply@lockandlogic.com>',
        to: import.meta.env.ADMIN_EMAIL,
        subject: 'Mailchimp Subscription Failed',
        html: `<p>A newsletter subscription failed for <strong>${email}</strong>.</p>
               <p>Error: ${mailchimpResult.error || 'Unknown'}</p>
               <p>The email was logged in the database. You may need to add this subscriber manually.</p>`,
      }).catch(() => {}); // Don't let notification failure block the response

      return new Response(
        JSON.stringify({ error: mailchimpResult.error || 'Subscription failed. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
