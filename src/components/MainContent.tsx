import React from 'react'
import HeroSection from '@/components/HeroSection'

export default function MainContent() {
  return (
    <main className="flex-1 lg:ml-0 min-h-screen">
      {/* Hero Section with main titles */}
      <HeroSection />
      
      {/* Additional content sections can be added here */}
      <section className="px-6 py-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature cards placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prompting Strategico
              </h3>
              <p className="text-gray-600">
                Tecniche avanzate per ottimizzare l'interazione con l'IA
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Metacognizione
              </h3>
              <p className="text-gray-600">
                Sviluppa la consapevolezza dei tuoi processi cognitivi
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risultati Amplificati
              </h3>
              <p className="text-gray-600">
                Massimizza l'efficacia delle tue interazioni con l'IA
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
