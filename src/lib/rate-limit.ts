import { supabase } from './supabase';

export async function checkRateLimit(
  ip: string,
  formType: string,
  maxPerHour: number = 5
): Promise<boolean> {
  const oneHourAgo = new Date(Date.now() - 3600000).toISOString();

  const { count } = await supabase
    .from('form_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('ip_address', ip)
    .eq('form_type', formType)
    .gte('created_at', oneHourAgo);

  return (count ?? 0) < maxPerHour;
}
