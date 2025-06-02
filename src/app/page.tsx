import Image from "next/image";
import AuthButton from "@/components/AuthButton";
import PurchaseButton from "@/components/PurchaseButton";
import PromptComparison from "@/components/home/PromptComparison";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navbar */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                MetaPrompt
              </h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#corsi" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Corsi
                </a>
                {/* Developer Access Link */}
                <a 
                  href="/corso/corso-base" 
                  className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50 px-3 py-2 text-sm font-medium transition-colors rounded-md border border-yellow-300 dark:border-yellow-700"
                  title="Accesso sviluppatore al corso base"
                >
                  🚧 Dev: Corso Base
                </a>
              </div>
            </div>
            
            {/* Auth Button */}
            <div className="flex items-center space-x-4">
              <AuthButton />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            La Metacognizione Avanzata 
            <span className="text-blue-600 dark:text-blue-400 block">
              nel Prompt
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
            Scopri come migliorare drasticamente le tue competenze nel prompt engineering attraverso 
            tecniche avanzate di metacognizione e pensiero critico.
          </p>
          
          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#corsi" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center group"
            >
              Scopri i Corsi
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#coaching" 
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Coaching 1:1
            </a>
          </div>

          {/* Developer Quick Access */}
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-medium">🛠️ Modalità Sviluppatore</span>
              <a 
                href="/corso/corso-base"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center space-x-2"
              >
                <span>Accedi al Corso Base</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
              Accesso diretto per sviluppatori e testing (non richiede autenticazione o acquisto)
            </p>
          </div>
        </div>

        {/* Animated Arrow Down */}
        <div className="flex justify-center">
          <a href="#target" className="text-slate-400 hover:text-blue-600 transition-colors">
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* A Chi È Rivolto Section */}
        <section id="target" className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              A Chi È Rivolto
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I nostri corsi sono progettati per diverse tipologie di professionisti e appassionati
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professionisti */}
            <a href="#corsi" className="text-center group cursor-pointer block">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Professionisti
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Marketing, HR, consulenti e manager che vogliono ottimizzare il loro lavoro con l'AI
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center">
                  Vedi corsi consigliati
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Sviluppatori */}
            <a href="#corsi" className="text-center group cursor-pointer block">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Sviluppatori
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Programmatori e tech lead che integrano AI nei loro progetti e workflow di sviluppo
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-green-600 dark:text-green-400 text-sm font-medium inline-flex items-center">
                  Vedi corsi consigliati
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Studenti */}
            <a href="#corsi" className="text-center group cursor-pointer block">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Studenti
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Universitari e ricercatori che vogliono utilizzare l'AI per migliorare lo studio e la ricerca
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-purple-600 dark:text-purple-400 text-sm font-medium inline-flex items-center">
                  Vedi corsi consigliati
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Appassionati AI */}
            <a href="#corsi" className="text-center group cursor-pointer block">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Appassionati AI
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Curiosi e innovatori che vogliono padroneggiare l'intelligenza artificiale nella vita quotidiana
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-orange-600 dark:text-orange-400 text-sm font-medium inline-flex items-center">
                  Vedi corsi consigliati
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>

          {/* Arrow to next section */}
          <div className="flex justify-center mt-16">
            <a href="#demo" className="text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* NUOVA SEZIONE: Prompt Comparison Demo */}
        <div id="demo">
          <PromptComparison />
        </div>

        {/* Live Coaching Section */}
        <section id="coaching" className="mt-20 mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Sessioni di Live Coaching
                    <span className="block text-blue-200">con Jacopo</span>
                  </h2>
                  <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                    Oltre ai corsi, offro sessioni individuali di coaching per accelerare il tuo apprendimento. 
                    Insieme analizzeremo i tuoi casi specifici e svilupperemo strategie personalizzate di prompt engineering.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-100">Sessioni 1:1 personalizzate</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-100">Analisi dei tuoi prompt reali</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-100">Strategie su misura per il tuo settore</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
                      <div className="text-2xl font-bold">€89</div>
                      <div className="text-blue-200 text-sm">sessione da 60 min</div>
                    </div>
                    <PurchaseButton courseType="COACHING" price="€89" variant="secondary" className="text-white border-white hover:bg-white hover:text-blue-600">
                      Prenota Sessione
                    </PurchaseButton>
                  </div>
                </div>

                {/* Photo */}
                <div className="relative">
                  <div className="relative z-10">
                    <Image
                      src="/jacopo.jpg"
                      alt="Jacopo - Esperto in Metacognizione e Prompt Engineering"
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow to courses */}
          <div className="flex justify-center mt-16">
            <a href="#corsi" className="text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Course Cards */}
        <section id="corsi">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Scegli il Tuo Percorso
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Tre livelli di approfondimento per portare le tue competenze al livello successivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corso Base */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Corso Base
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">€49</span>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">una tantum</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Fondamenti del prompt engineering</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Tecniche base di metacognizione</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">5 ore di video lezioni</span>
                    </div>
                  </div>
                  <PurchaseButton courseType="BASE" price="€49" className="w-full">
                    Inizia Ora
                  </PurchaseButton>
                </div>
              </div>
            </div>

            {/* Corso Medio */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-500 relative transform hover:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Più Popolare
                </span>
              </div>
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Corso Medio
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">€149</span>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">una tantum</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Tutto del corso base +</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Strategie avanzate di riflessione</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">12 ore di contenuti pratici</span>
                    </div>
                  </div>
                  <PurchaseButton courseType="MEDIUM" price="€149" className="w-full">
                    Scegli Medio
                  </PurchaseButton>
                </div>
              </div>
            </div>

            {/* Corso Avanzato */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Corso Avanzato
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">€249</span>
                    <span className="text-slate-600 dark:text-slate-300 ml-2">una tantum</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Tutto dei corsi precedenti +</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">Metodologie di pensiero critico</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">20 ore + sessioni 1:1</span>
                    </div>
                  </div>
                  <PurchaseButton courseType="ADVANCED" price="€249" variant="premium" className="w-full">
                    Diventa Esperto
                  </PurchaseButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
