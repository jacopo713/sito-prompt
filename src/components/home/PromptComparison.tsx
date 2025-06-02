import React from 'react'
import { ArrowRight, Zap, Target, CheckCircle } from 'lucide-react'
import ChatDemo from './ChatDemo'

export default function PromptComparison() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vedi la Differenza in <span className="text-blue-600">Tempo Reale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scopri come un prompt ben strutturato trasforma completamente la qualità 
            dell'output AI. La stessa richiesta, due approcci diversi, risultati incomparabili.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" />
              <span>Prompt Engineering in Azione</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Risultati Istantanei</span>
            </div>
          </div>
        </div>

        {/* Demo Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ChatDemo type="passive" />
          <ChatDemo type="proactive" />
        </div>

        {/* Analysis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What's Wrong */}
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-bold">✗</span>
                Cosa Non Funziona
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Richiesta vaga:</strong>
                    <span className="text-gray-600"> "Scrivi un articolo di marketing" - troppo generico</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Nessun contesto:</strong>
                    <span className="text-gray-600"> L'AI non sa per chi, cosa, come e perché</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Risultato generico:</strong>
                    <span className="text-gray-600"> Contenuto standard, non utilizzabile</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* What's Right */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                Cosa Funziona
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Target specifico:</strong>
                    <span className="text-gray-600"> Professionisti 28-40 anni, settore definito</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Obiettivi chiari:</strong>
                    <span className="text-gray-600"> 500 iscrizioni beta in 30 giorni</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Struttura definita:</strong>
                    <span className="text-gray-600"> Hook, problema, soluzione, benefici, CTA</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Risultato professionale:</strong>
                    <span className="text-gray-600"> Pronto per la pubblicazione</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Vuoi imparare a creare prompt come questo?
              </h4>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Nel nostro corso ti insegniamo le tecniche specifiche per trasformare 
                ogni tua richiesta in un prompt che genera risultati professionali.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg">
                Scopri il Corso
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h5 className="text-xl font-semibold text-gray-900 mb-2">Specificità</h5>
            <p className="text-gray-600">
              Più dettagli fornisci, migliori saranno i risultati che otterrai
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h5 className="text-xl font-semibold text-gray-900 mb-2">Struttura</h5>
            <p className="text-gray-600">
              Organizza la richiesta con formato e obiettivi chiari
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h5 className="text-xl font-semibold text-gray-900 mb-2">Contesto</h5>
            <p className="text-gray-600">
              Fornisci background, target e vincoli per risultati mirati
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
