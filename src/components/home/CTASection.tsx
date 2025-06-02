"use client"

import React from 'react'
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trasforma il Tuo Rapporto con l'AI
            <span className="block text-blue-200">Inizia Oggi Stesso</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Non aspettare che altri prendano il vantaggio. Inizia subito a padroneggiare 
            le tecniche che stanno rivoluzionando il modo di lavorare con l'intelligenza artificiale.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-blue-200">Professionisti Formati</div>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Tasso di Soddisfazione</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Rating Medio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#corsi"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
            >
              Scegli il Tuo Corso
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#coaching"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Prenota Coaching 1:1
            </a>
          </div>

          {/* Urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-100 mb-2">
              <strong className="text-white">Offerta Limitata:</strong> I primi 100 iscritti ricevono:
            </p>
            <ul className="text-blue-100 text-sm space-y-1">
              <li>✓ Sessione di coaching gratuita (valore €89)</li>
              <li>✓ Accesso anticipato ai nuovi contenuti</li>
              <li>✓ Template di prompt avanzati</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
