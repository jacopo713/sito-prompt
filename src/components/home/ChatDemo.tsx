"use client"

import React, { useState, useEffect } from 'react'
import { MessageCircle, Bot, User, Sparkles, ArrowRight } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  isTyping?: boolean
}

interface ChatDemoProps {
  type: 'passive' | 'proactive'
}

const PASSIVE_DEMO = {
  userPrompt: "Scrivi un articolo di marketing",
  aiResponse: "Ecco un articolo di marketing:\n\nIl marketing è importante per le aziende. È necessario promuovere i prodotti per aumentare le vendite. Utilizzate strategie diverse per raggiungere i clienti. Create contenuti interessanti e utilizzate i social media. Il marketing digitale è molto popolare oggi..."
}

const PROACTIVE_DEMO = {
  userPrompt: `Scrivi un articolo di marketing per il lancio di un'app di fitness rivolta a professionisti tra i 28-40 anni che hanno poco tempo.

**Contesto**: SaaS startup nel settore wellness
**Obiettivo**: Generare 500 iscrizioni beta in 30 giorni
**Formato**: 800 parole, tono professionale ma amichevole
**Struttura**: Hook emotivo, problema, soluzione, benefici, call-to-action
**Parole chiave**: efficienza, risultati rapidi, tecnologia avanzata
**Canale**: LinkedIn e newsletter aziendali

Includi:
- Statistiche sul tempo che i professionisti dedicano al fitness
- Case study di utenti beta (puoi inventarli)
- Sezione FAQ con 3 domande comuni`,
  aiResponse: `# Trasforma i Tuoi 20 Minuti di Pausa in una Sessione di Allenamento Perfetta

*Quando l'ultimo allenamento sembra un ricordo lontano...*

Se sei tra quei professionisti che guardano l'orologio alle 19:30 pensando "anche oggi niente palestra", non sei solo. Il 73% dei manager italiani dichiara di non avere tempo per l'attività fisica regolare, secondo uno studio Fitbit 2024.

## Il Problema che Tutti Riconosciamo

Marco, 34 anni, consulente finanziario: "Programmavo la palestra alle 7:00, ma ogni meeting che slittava era un allenamento saltato. Dopo 6 mesi ho rinunciato."

## La Soluzione: FitPro AI

FitPro non è l'ennesima app fitness. È il primo personal trainer AI che si adatta al tuo calendario Outlook, creando routine di 15-45 minuti basate su:
- Tempo disponibile reale
- Obiettivi personali  
- Livello di stress (integrazione Apple Watch)
- Spazio disponibile (casa/ufficio/hotel)

### Risultati dei Beta User:
- **Sara R., Legal Manager**: "In 8 settimane ho recuperato la forma pre-lockdown. 25 minuti al giorno, zero scuse."
- **Luca M., Sales Director**: "Allenamenti in hotel durante le trasferte. Game changer."

## FAQ:
**Q: Funziona davvero con solo 20 minuti?**
A: I nostri algoritmi ottimizzano ogni secondo. Risultati visibili in 4 settimane.

**Q: Serve attrezzatura?**  
A: No, tutto a corpo libero. Al massimo una bottiglia d'acqua.

**Q: Costa quanto un personal trainer?**
A: 29€/mese vs 80€/ora. Fai tu i conti.

---
**Pronto a riprenderti il controllo del tuo benessere?**
[ACCEDI ALLA BETA GRATUITA] - Solo per i primi 500 professionisti`
}

export default function ChatDemo({ type }: ChatDemoProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'user-typing' | 'ai-responding' | 'complete'>('idle')

  const demo = type === 'passive' ? PASSIVE_DEMO : PROACTIVE_DEMO

  useEffect(() => {
    startDemo()
  }, [type])

  const startDemo = async () => {
    setMessages([])
    setCurrentMessage('')
    setPhase('idle')
    
    // Piccola pausa iniziale
    await sleep(1000)
    
    // Fase 1: User typing
    setPhase('user-typing')
    await typeMessage(demo.userPrompt, 'user')
    
    // Pausa prima della risposta AI
    await sleep(1500)
    
    // Fase 2: AI responding
    setPhase('ai-responding')
    await typeMessage(demo.aiResponse, 'assistant')
    
    setPhase('complete')
  }

  const typeMessage = async (text: string, role: 'user' | 'assistant') => {
    const messageId = Date.now().toString()
    
    // Aggiungi messaggio vuoto
    setMessages(prev => [...prev, {
      id: messageId,
      role,
      content: '',
      isTyping: true
    }])

    setIsTyping(true)

    // Simula typing veloce per user, più lento per AI
    const typingSpeed = role === 'user' ? 50 : 30
    
    for (let i = 0; i <= text.length; i++) {
      const currentText = text.slice(0, i)
      
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, content: currentText }
          : msg
      ))
      
      await sleep(typingSpeed)
    }

    // Rimuovi l'indicatore di typing
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, isTyping: false }
        : msg
    ))
    
    setIsTyping(false)
  }

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const getTitle = () => {
    return type === 'passive' 
      ? 'Prompt Generico' 
      : 'Prompt Ottimizzato'
  }

  const getDescription = () => {
    return type === 'passive'
      ? 'Vago, senza contesto, risultato mediocre'
      : 'Specifico, strutturato, risultato professionale'
  }

  const getBadgeColor = () => {
    return type === 'passive' 
      ? 'bg-red-100 text-red-700 border-red-200' 
      : 'bg-green-100 text-green-700 border-green-200'
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {type === 'passive' ? (
              <MessageCircle className="w-5 h-5 text-red-500" />
            ) : (
              <Sparkles className="w-5 h-5 text-green-500" />
            )}
            <h3 className="font-semibold text-gray-900">{getTitle()}</h3>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getBadgeColor()}`}>
            {type === 'passive' ? 'PRIMA' : 'DOPO'}
          </span>
        </div>
        <p className="text-sm text-gray-600">{getDescription()}</p>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === 'user' 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {message.role === 'user' ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            
            <div className={`flex-1 max-w-[80%] ${
              message.role === 'user' ? 'text-right' : ''
            }`}>
              <div className={`inline-block p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}>
                {message.content}
                {message.isTyping && (
                  <span className="inline-block w-2 h-4 bg-current opacity-50 animate-pulse ml-1" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && phase === 'ai-responding' && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Bot className="w-4 h-4" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button
          onClick={startDemo}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          Riproduci Demo
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
