interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface GroupInquiryData {
  name: string;
  company: string;
  email: string;
  phone: string;
  group_size: string;
  event_type: string;
  preferred_date: string;
  message: string;
}

const wrapper = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#030d19;padding:24px 32px;">
              <h1 style="margin:0;color:#d4a843;font-size:20px;font-weight:700;">Lock &amp; Logic</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background:#f4f4f5;padding:16px 32px;text-align:center;">
              <p style="margin:0;color:#71717a;font-size:12px;">This is an automated notification from your website forms.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const field = (label: string, value: string) =>
  value
    ? `<p style="margin:0 0 12px;"><strong style="color:#18181b;">${label}:</strong> <span style="color:#3f3f46;">${value}</span></p>`
    : '';

export function contactEmailHtml(data: ContactData): string {
  return wrapper(`
    <h2 style="margin:0 0 20px;color:#18181b;font-size:18px;">New Contact Form Submission</h2>
    ${field('Name', data.name)}
    ${field('Email', data.email)}
    ${field('Phone', data.phone)}
    <p style="margin:16px 0 4px;"><strong style="color:#18181b;">Message:</strong></p>
    <p style="margin:0;color:#3f3f46;white-space:pre-wrap;">${data.message}</p>
  `);
}

export function groupInquiryEmailHtml(data: GroupInquiryData): string {
  const eventTypeLabels: Record<string, string> = {
    'team-building': 'Team Building',
    'corporate-outing': 'Corporate Outing',
    birthday: 'Birthday Party',
    celebration: 'Celebration / Special Event',
    other: 'Other',
  };

  return wrapper(`
    <h2 style="margin:0 0 20px;color:#18181b;font-size:18px;">New Group Inquiry</h2>
    ${field('Name', data.name)}
    ${field('Company', data.company)}
    ${field('Email', data.email)}
    ${field('Phone', data.phone)}
    ${field('Group Size', data.group_size)}
    ${field('Event Type', eventTypeLabels[data.event_type] || data.event_type)}
    ${field('Preferred Date', data.preferred_date)}
    ${data.message ? `<p style="margin:16px 0 4px;"><strong style="color:#18181b;">Additional Details:</strong></p><p style="margin:0;color:#3f3f46;white-space:pre-wrap;">${data.message}</p>` : ''}
  `);
}
