"use client";

import { useState } from 'react';
import { getStripe, CourseType } from '@/lib/stripe';
import { useAuth } from '@/hooks/useAuth';

interface UseStripeReturn {
  createCheckoutSession: (courseType: CourseType) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export function useStripe(): UseStripeReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const createCheckoutSession = async (courseType: CourseType) => {
    setLoading(true);
    setError(null);

    try {
      // Verifica che l'utente sia autenticato
      if (!user) {
        throw new Error('Devi essere autenticato per procedere con l\'acquisto');
      }

      if (!user.email) {
        throw new Error('Email utente non disponibile');
      }

      console.log('Iniziando checkout per:', { courseType, userEmail: user.email });

      // Crea la sessione di checkout
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseType,
          userEmail: user.email,
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        let errorMessage = 'Errore durante la creazione del checkout';
        
        try {
          const errorData = await response.json();
          console.error('Errore API:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Errore parsing response:', parseError);
          errorMessage = `Errore HTTP ${response.status}`;
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Checkout session data:', data);
      
      if (!data.url) {
        throw new Error('URL di checkout non ricevuto dal server');
      }

      // Reindirizza alla pagina di checkout Stripe
      console.log('Reindirizzando a:', data.url);
      window.location.href = data.url;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore sconosciuto durante il checkout';
      console.error('Errore checkout:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    createCheckoutSession,
    loading,
    error,
  };
}
