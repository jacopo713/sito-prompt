"use client"

import React from 'react'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Corso #1 in Italia per Prompt Engineering</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            La Metacognizione Avanzata 
            <span className="text-blue-600 dark:text-blue-400 block">
              nel Prompt Engineering
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Trasforma il modo in cui interagisci con l'AI attraverso tecniche avanzate di metacognizione. 
            Scopri come ottenere risultati professionali con prompt strutturati e strategici.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">4.9/5 da 240+ studenti</span>
            </div>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-600" />
            <div className="text-slate-600 dark:text-slate-300 text-sm">
              Oltre 1.200 professionisti formati
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#corsi" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center group"
            >
              Scopri i Corsi
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#demo" 
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Vedi Demo dal Vivo
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">Certificato da:</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">✓ Università Bocconi</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">✓ Microsoft AI</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">✓ Google Workspace</div>
          </div>
        </div>
      </div>
    </section>
  )
}
