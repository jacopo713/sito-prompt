import { NextRequest, NextResponse } from 'next/server';
import { stripe, COURSES, CourseType } from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { courseType, userEmail } = await request.json();
    
    // Validazione del tipo di corso
    if (!courseType || !Object.keys(COURSES).includes(courseType)) {
      return NextResponse.json(
        { error: 'Tipo di corso non valido' },
        { status: 400 }
      );
    }

    // Validazione email utente
    if (!userEmail) {
      return NextResponse.json(
        { error: 'Email utente richiesta' },
        { status: 400 }
      );
    }

    const course = COURSES[courseType as CourseType];
    const headersList = headers();
    const origin = headersList.get('origin') || 'http://localhost:3000';

    console.log('Creating checkout session:', {
      courseType,
      priceId: course.priceId,
      userEmail,
      origin
    });

    // Crea la sessione di checkout Stripe usando Price ID predefinito
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: userEmail,
      line_items: [
        {
          price: course.priceId, // Usa Price ID predefinito
          quantity: 1,
        },
      ],
      metadata: {
        courseType,
        userEmail: userEmail || '',
        courseName: course.name,
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&course=${courseType}`,
      cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      allow_promotion_codes: true, // Permette codici sconto
      invoice_creation: {
        enabled: true,
      },
    });

    console.log('Checkout session created:', {
      sessionId: session.id,
      url: session.url
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('Errore creazione sessione checkout:', error);
    
    // Gestione errori più specifica
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { 
          error: `Errore Stripe: ${error.message}`,
          type: error.type 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Errore interno del server durante la creazione del checkout' },
      { status: 500 }
    );
  }
}
