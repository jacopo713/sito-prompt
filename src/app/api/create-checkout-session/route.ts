import { NextRequest, NextResponse } from 'next/server';
import { stripe, COURSES, CourseType } from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { courseType, userEmail } = await request.json();
    
    if (!courseType || !Object.keys(COURSES).includes(courseType)) {
      return NextResponse.json(
        { error: 'Tipo di corso non valido' },
        { status: 400 }
      );
    }

    const course = COURSES[courseType as CourseType];
    const headersList = headers();
    const origin = headersList.get('origin') || 'http://localhost:3000';

    // Crea la sessione di checkout Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: course.currency,
            product_data: {
              name: course.name,
              description: course.description,
              images: [`${origin}/course-${courseType.toLowerCase()}.jpg`],
            },
            unit_amount: course.price,
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseType,
        userEmail: userEmail || '',
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&course=${courseType}`,
      cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['IT', 'US', 'GB', 'DE', 'FR', 'ES'],
      },
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('Errore creazione sessione checkout:', error);
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
}
