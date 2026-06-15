interface ZohoTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  error?: string;
}

export interface ZohoLeadData {
  firstName?: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  pincode?: string;
  leadSource:
    | 'Newsletter'
    | 'Web Site'
    | 'Cold Call'
    | 'Employee Referral'
    | 'Online Store'
    | 'Chat';
  description?: string;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const params = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    grant_type: 'refresh_token',
  });

  const res = await fetch(
    `${process.env.ZOHO_ACCOUNTS_URL ?? 'https://accounts.zoho.in'}/oauth/v2/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    }
  );

  const data: ZohoTokenResponse = await res.json();

  if (!res.ok || data.error) {
    throw new Error(`Zoho token error: ${data.error ?? res.statusText}`);
  }

  // Cache with a 60-second buffer before actual expiry
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.token;
}

export async function createZohoLead(lead: ZohoLeadData): Promise<void> {
  const token = await getAccessToken();
  const apiBase = process.env.ZOHO_API_URL ?? 'https://www.zohoapis.in';

  const payload = {
    data: [
      {
        First_Name: lead.firstName ?? undefined,
        Last_Name: lead.lastName,
        Email: lead.email ?? undefined,
        Phone: lead.phone ?? undefined,
        Mailing_Street: lead.address ?? undefined,
        City: lead.city ?? undefined,
        Zip_Code: lead.pincode ?? undefined,
        Lead_Source: lead.leadSource,
        Description: lead.description ?? undefined,
      },
    ],
  };

  const res = await fetch(`${apiBase}/crm/v2/Leads`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Zoho create lead failed (${res.status}): ${body}`);
  }
}
