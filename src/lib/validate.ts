/** Escape HTML entities to prevent injection in email templates */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Strip HTML tags, encode entities, and trim */
export function sanitize(str: string): string {
  return escapeHtml(str.trim().replace(/<[^>]*>/g, ''));
}

/** Strip newlines to prevent email header injection */
export function sanitizeForSubject(str: string): string {
  return sanitize(str).replace(/[\r\n]/g, '');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAX_LENGTHS: Record<string, number> = {
  name: 200,
  email: 320,
  phone: 30,
  company: 200,
  group_size: 10,
  event_type: 50,
  preferred_date: 20,
  message: 5000,
};

/** Truncate a field to its max allowed length */
export function enforceMaxLength(value: string, fieldName: string): string {
  const max = MAX_LENGTHS[fieldName] ?? 1000;
  return value.slice(0, max);
}

export function isHoneypotTriggered(formData: FormData): boolean {
  const honeypot = formData.get('fax_number');
  return !!honeypot && String(honeypot).length > 0;
}
