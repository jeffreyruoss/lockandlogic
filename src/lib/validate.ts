export function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, '');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isHoneypotTriggered(formData: FormData): boolean {
  const honeypot = formData.get('website');
  return !!honeypot && String(honeypot).length > 0;
}
