"use client";

import { useState } from 'react';
import { useStripe } from '@/hooks/useStripe';
import { useAuth } from '@/hooks/useAuth';
import { CourseType } from '@/lib/stripe';

interface PurchaseButtonProps {
  courseType: CourseType;
  price: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'premium';
}

export default function PurchaseButton({ 
  courseType, 
  price, 
  children, 
  className = "",
  variant = 'primary'
}: PurchaseButtonProps) {
  const { createCheckoutSession, loading, error } = useStripe();
  const { user } = useAuth();
  const [showAuthError, setShowAuthError] = useState(false);

  const handlePurchase = async () => {
    if (!user) {
      setShowAuthError(true);
      setTimeout(() => setShowAuthError(false), 3000);
      return;
    }

    await createCheckoutSession(courseType);
  };

  const getButtonClasses = () => {
    const baseClasses = "transition-all transform hover:scale-105 font-medium rounded-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
    
    switch (variant) {
      case 'secondary':
        return `${baseClasses} border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3`;
      case 'premium':
        return `${baseClasses} bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3`;
      default:
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white px-6 py-3`;
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handlePurchase}
        disabled={loading}
        className={`${getButtonClasses()} ${className}`}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Elaborazione...
          </>
        ) : (
          <>
            {children}
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      {/* Error Messages */}
      {showAuthError && (
        <div className="text-red-600 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/20 p-2 rounded">
          Devi essere autenticato per procedere con l'acquisto
        </div>
      )}
      
      {error && (
        <div className="text-red-600 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/20 p-2 rounded">
          {error}
        </div>
      )}

      {/* Security Note */}
      <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
        Pagamento sicuro tramite Stripe • SSL protetto
      </div>
    </div>
  );
}
