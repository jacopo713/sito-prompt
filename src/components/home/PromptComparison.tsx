import React from 'react'
import { ArrowRight, Zap, Target, CheckCircle } from 'lucide-react'
import ChatDemo from './ChatDemo'

export default function PromptComparison() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-850"> {/* Adjusted background for dark mode */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Vedi la Differenza in <span className="text-blue-600 dark:text-blue-400">Tempo Reale</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Scopri come un prompt ben strutturato trasforma completamente la qualità 
            dell'output AI. La stessa richiesta, due approcci diversi, risultati incomparabili.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500 dark:text-slate-400 mb-12">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>Prompt Engineering in Azione</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>Risultati Istantanei</span>
            </div>
          </div>
        </div>

        {/* Demo Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ChatDemo type="passive" />
          <ChatDemo type="proactive" />
        </div>

        {/* CTA Section (Previously part of Analysis) */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-center"> {/* Removed mt-12, direct child now */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-700">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Vuoi imparare a creare prompt come questo?
              </h4>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Nel nostro corso ti insegniamo le tecniche specifiche per trasformare 
                ogni tua richiesta in un prompt che genera risultati professionali.
              </p>
              <a // Changed button to a link for potential navigation
                href="#corsi" // Link to courses section
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-base sm:text-lg group"
              >
                Scopri il Corso
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h5 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Specificità</h5>
            <p className="text-slate-600 dark:text-slate-300">
              Più dettagli fornisci, migliori saranno i risultati che otterrai.
            </p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h5 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Struttura</h5>
            <p className="text-slate-600 dark:text-slate-300">
              Organizza la richiesta con formato e obiettivi chiari.
            </p>
          </div>
          
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h5 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Contesto</h5>
            <p className="text-slate-600 dark:text-slate-300">
              Fornisci background, target e vincoli per risultati mirati.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
