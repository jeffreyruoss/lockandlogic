import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { resend } from '../../lib/resend';
import { verifyTurnstile } from '../../lib/turnstile';
import { checkRateLimit } from '../../lib/rate-limit';
import { sanitize, sanitizeForSubject, isValidEmail, isHoneypotTriggered, enforceMaxLength } from '../../lib/validate';
import { groupInquiryEmailHtml } from '../../lib/email-templates';

export const prerender = false;

const VALID_EVENT_TYPES = ['team-building', 'corporate-outing', 'birthday', 'celebration', 'other'];

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

    const name = enforceMaxLength(sanitize(formData.get('name') as string || ''), 'name');
    const company = enforceMaxLength(sanitize(formData.get('company') as string || ''), 'company');
    const email = enforceMaxLength(sanitize(formData.get('email') as string || ''), 'email');
    const phone = enforceMaxLength(sanitize(formData.get('phone') as string || ''), 'phone');
    const group_size = enforceMaxLength(sanitize(formData.get('group_size') as string || ''), 'group_size');
    const raw_event_type = sanitize(formData.get('event_type') as string || '');
    const event_type = VALID_EVENT_TYPES.includes(raw_event_type) ? raw_event_type : '';
    const preferred_date = enforceMaxLength(sanitize(formData.get('preferred_date') as string || ''), 'preferred_date');
    const message = enforceMaxLength(sanitize(formData.get('message') as string || ''), 'message');

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

    const { error: dbError } = await supabase.from('form_submissions').insert({
      form_type: 'group_inquiry',
      data,
      ip_address: clientAddress,
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError.message);
    }

    await resend.emails.send({
      from: `Lock & Logic <noreply@lockandlogic.com>`,
      to: import.meta.env.NOTIFICATION_EMAIL.split(',').map((e: string) => e.trim()),
      replyTo: email,
      subject: `New Group Inquiry: ${sanitizeForSubject(company)} (${sanitizeForSubject(name)})`,
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
