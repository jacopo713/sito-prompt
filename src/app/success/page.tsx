"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { COURSES, CourseType } from '@/lib/stripe';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const courseType = searchParams.get('course') as CourseType;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un breve caricamento per mostrare l'animazione
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg className="animate-spin w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
          <p className="text-slate-600 dark:text-slate-300">Elaborazione pagamento...</p>
        </div>
      </div>
    );
  }

  const course = courseType ? COURSES[courseType] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Pagamento Completato!
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Grazie per aver acquistato {course?.name || 'il corso'}. 
            Riceverai una email di conferma con tutti i dettagli per accedere al corso.
          </p>

          {/* Order Details */}
          {course && (
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Dettagli Ordine
              </h3>
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Corso:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{course.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Prezzo:</span>
                  <span className="font-medium text-slate-900 dark:text-white">€{(course.price / 100).toFixed(2)}</span>
                </div>
                {sessionId && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">ID Transazione:</span>
                    <span className="font-mono text-sm text-slate-900 dark:text-white">{sessionId.slice(-8)}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* What's Next */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-3">
              Cosa succede adesso?
            </h3>
            <div className="text-left space-y-2 text-blue-800 dark:text-blue-300">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                <span>Riceverai una email di conferma entro 5 minuti</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                <span>Troverai il link di accesso al corso nella email</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                <span>Potrai iniziare subito il tuo percorso di apprendimento</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Torna alla Home
            </Link>
            
            
              href="mailto:info@metacognizione.it"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contatta il Supporto
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
            Se non ricevi l'email entro 10 minuti, controlla la cartella spam o contatta il supporto.
          </p>
        </div>
      </div>
    </div>
  );
}
