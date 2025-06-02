"use client"

import React from 'react'
import { Check, Star } from 'lucide-react'
import PurchaseButton from '@/components/PurchaseButton'

export default function PricingSection() {
  const plans = [
    {
      name: "Corso Base",
      price: "49",
      courseType: "BASE" as const,
      description: "Perfetto per iniziare",
      features: [
        "Fondamenti del prompt engineering",
        "Tecniche base di metacognizione",
        "5 ore di video lezioni",
        "Esercizi pratici guidati",
        "Accesso alla community"
      ],
      popular: false
    },
    {
      name: "Corso Medio",
      price: "149",
      courseType: "MEDIUM" as const,
      description: "Il più scelto dai professionisti",
      features: [
        "Tutto del corso base +",
        "Strategie avanzate di riflessione",
        "12 ore di contenuti pratici",
        "Workshop dal vivo mensili",
        "Casi studio aziendali",
        "Certificato riconosciuto"
      ],
      popular: true
    },
    {
      name: "Corso Avanzato",
      price: "249",
      courseType: "ADVANCED" as const,
      description: "Per diventare un esperto",
      features: [
        "Tutto dei corsi precedenti +",
        "Metodologie di pensiero critico",
        "20 ore + sessioni 1:1",
        "Mentoring personalizzato",
        "Accesso lifetime agli aggiornamenti",
        "Job placement support"
      ],
      popular: false
    }
  ]

  return (
    <section id="corsi" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Scegli il Tuo Percorso
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tre livelli di approfondimento per portare le tue competenze al livello successivo
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Più Popolare
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    €{plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 ml-2">una tantum</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <PurchaseButton 
                courseType={plan.courseType}
                price={`€${plan.price}`}
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                {plan.popular ? 'Inizia Subito' : 'Scegli Piano'}
              </PurchaseButton>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            💳 Pagamento sicuro • 📚 Accesso immediato • 🔄 Garanzia 30 giorni
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <span>✓ Certificato incluso</span>
            <span>✓ Aggiornamenti gratuiti</span>
            <span>✓ Supporto dedicato</span>
          </div>
        </div>
      </div>
    </section>
  )
}
