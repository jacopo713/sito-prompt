import React from 'react'
import { Brain, Target, Zap, Users, BookOpen, Award } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Metacognizione Applicata',
      description: 'Sviluppa la consapevolezza del tuo processo di pensiero per creare prompt più efficaci'
    },
    {
      icon: Target,
      title: 'Risultati Misurabili',
      description: 'Tecniche validate che migliorano del 300% la qualità degli output AI'
    },
    {
      icon: Zap,
      title: 'Metodologia CORE',
      description: 'Sistema strutturato: Context, Optimization, Reflexive, Enhancement'
    },
    {
      icon: Users,
      title: 'Coaching Personalizzato',
      description: 'Sessioni 1:1 con esperti per affinare le tue competenze specifiche'
    },
    {
      icon: BookOpen,
      title: 'Casi Studio Reali',
      description: 'Esempi pratici da aziende Fortune 500 e startup innovative'
    },
    {
      icon: Award,
      title: 'Certificazione Riconosciuta',
      description: 'Attestato valido per LinkedIn e curriculum professionale'
    }
  ]

  return (
    <section id="target" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            A Chi È Rivolto
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I nostri corsi sono progettati per diverse tipologie di professionisti e appassionati
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:bg-slate-50 dark:hover:bg-slate-800 p-6 rounded-2xl transition-colors">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
