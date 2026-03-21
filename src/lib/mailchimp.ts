export async function subscribeToMailchimp(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const server = import.meta.env.MAILCHIMP_SERVER_PREFIX;
  const listId = import.meta.env.MAILCHIMP_LIST_ID;
  const apiKey = import.meta.env.MAILCHIMP_API_KEY;

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  );

  if (response.ok) return { success: true };

  const data = await response.json();
  if (data.title === 'Member Exists') return { success: true };
  return { success: false, error: data.detail || 'Subscription failed' };
}
