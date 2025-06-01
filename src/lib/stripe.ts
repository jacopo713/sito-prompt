import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

// Client-side Stripe
export const getStripe = async () => {
  const { loadStripe } = await import('@stripe/stripe-js');
  
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
  }
  
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
};

// Product configurations
export const COURSES = {
  BASE: {
    id: 'corso-base',
    name: 'Corso Base - Metacognizione nel Prompt',
    price: 7900, // €79.00 in cents
    currency: 'eur',
    description: 'Fondamenti del prompt engineering e tecniche base di metacognizione'
  },
  MEDIUM: {
    id: 'corso-medio',
    name: 'Corso Medio - Metacognizione Avanzata',
    price: 14900, // €149.00 in cents
    currency: 'eur',
    description: 'Strategie avanzate di riflessione e 12 ore di contenuti pratici'
  },
  ADVANCED: {
    id: 'corso-avanzato',
    name: 'Corso Avanzato - Pensiero Critico',
    price: 24900, // €249.00 in cents
    currency: 'eur',
    description: 'Metodologie di pensiero critico e 20 ore + sessioni 1:1'
  },
  COACHING: {
    id: 'coaching-session',
    name: 'Sessione di Live Coaching',
    price: 8900, // €89.00 in cents
    currency: 'eur',
    description: 'Sessione 1:1 personalizzata da 60 minuti con Jacopo'
  }
} as const;

export type CourseType = keyof typeof COURSES;
