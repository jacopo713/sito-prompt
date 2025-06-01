import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        await handleSuccessfulPayment(session);
        break;
      
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent failed:', failedPayment.id);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  try {
    const { courseType, userEmail } = session.metadata || {};
    
    console.log('Payment successful:', {
      sessionId: session.id,
      courseType,
      userEmail,
      amount: session.amount_total,
      currency: session.currency,
    });

    // Qui puoi aggiungere la logica per:
    // 1. Salvare l'acquisto nel database
    // 2. Inviare email di conferma
    // 3. Attivare l'accesso al corso
    // 4. Aggiornare il profilo utente
    
    // Esempio di struttura dati da salvare:
    const purchaseData = {
      sessionId: session.id,
      courseType,
      userEmail,
      amount: session.amount_total,
      currency: session.currency,
      paymentStatus: session.payment_status,
      createdAt: new Date(),
    };
    
    console.log('Purchase data to save:', purchaseData);
    
  } catch (error) {
    console.error('Error handling successful payment:', error);
    throw error;
  }
}
