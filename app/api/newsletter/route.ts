import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createZohoLead } from '@/lib/zoho';
import { dataRouting } from '@/config/data-routing';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: string = body?.email;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (dataRouting.database.storeNewsletterSignups) {
      await prisma.newsletterSubscriber.upsert({
        where: { email },
        update: {},
        create: { email },
      });
    }

    if (dataRouting.zohoCRM.sendNewsletterSubscribers) {
      const username = email.split('@')[0];
      await createZohoLead({
        lastName: username,
        email,
        leadSource: 'Newsletter',
        description: `Newsletter subscriber. Signed up on ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}.`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[newsletter] failed:', error);
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
  }
}
