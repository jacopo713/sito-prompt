import React from 'react'
import { Star, Quote } from 'lucide-react'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Marketing Director, TechCorp",
      content: "Dopo il corso, i miei prompt sono diventati 10 volte più efficaci. Ho risparmiato ore di lavoro ogni settimana.",
      rating: 5,
      image: "/images/testimonials/marco.jpg"
    },
    {
      name: "Sara Bianchi",
      role: "Product Manager, StartupAI",
      content: "La metodologia CORE ha trasformato completamente il mio approccio all'AI. Risultati professionali in tempi record.",
      rating: 5,
      image: "/images/testimonials/sara.jpg"
    },
    {
      name: "Luca Verdi",
      role: "Freelance Developer",
      content: "Investimento migliore dell'anno. Ora riesco a creare documenti tecnici perfetti con l'AI in metà del tempo.",
      rating: 5,
      image: "/images/testimonials/luca.jpg"
    }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Cosa Dicono i Nostri Studenti
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Oltre 1.200 professionisti hanno già trasformato il loro approccio all'AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              
              {/* Content */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-300 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
