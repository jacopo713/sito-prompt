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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Errore durante la creazione del checkout');
      }

      const { url } = await response.json();
      
      if (!url) {
        throw new Error('URL di checkout non ricevuto');
      }

      // Reindirizza alla pagina di checkout Stripe
      window.location.href = url;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore sconosciuto';
      setError(errorMessage);
      console.error('Errore checkout:', err);
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
