"use client"

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, Bot, User, Sparkles, RefreshCw } from 'lucide-react'

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
  userPrompt: "creiamo un nuovo progetto typescript da terminale",
  aiResponse: `Ok, per creare un progetto TypeScript da terminale, puoi seguire questi passaggi generici:
1. Assicurati di avere Node.js e npm installati.
2. Installa TypeScript globalmente: \`npm install -g typescript\`
3. Crea una nuova cartella per il tuo progetto: \`mkdir nome-progetto && cd nome-progetto\`
4. Inizializza un progetto npm: \`npm init -y\`
5. Inizializza un file di configurazione TypeScript: \`tsc --init\`
6. Crea un file sorgente, ad esempio \`index.ts\`, e scrivi il tuo codice.
7. Compila il codice TypeScript in JavaScript: \`tsc\`
8. Esegui il file JavaScript compilato: \`node index.js\`
Questi sono i passaggi base. Per progetti più complessi potresti aver bisogno di configurazioni aggiuntive.`
}

const PROACTIVE_DEMO = {
  userPrompt: `creiamo un nuovo progetto next js con typescript da terminale, su sistema operativo ubuntu con cartella src tailwind e turbopack, il progetto si chiamerà sito-prompt, creiamo una pagina prova per verificare il funzionamento avviando in locale con npm run dev e poi proseguiamo con la creazione della homepage`,
  aiResponse: `Certo! Ecco i passaggi per creare il tuo progetto Next.js 'sito-prompt' su Ubuntu con TypeScript, cartella \`src\`, Tailwind CSS e Turbopack, e per testarlo:

**1. Creazione del Progetto Next.js:**
Apri il terminale Ubuntu e lancia il seguente comando:
\`\`\`bash
npx create-next-app@latest sito-prompt --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
\`\`\`
Quando ti chiede se vuoi usare Turbopack per lo sviluppo locale, rispondi **Sì (Yes)**.

**2. Naviga nella Cartella del Progetto:**
\`\`\`bash
cd sito-prompt
\`\`\`

**3. Creazione Pagina di Prova:**
Crea un file per la pagina di prova in \`src/app/prova/page.tsx\`:
\`\`\`tsx
// src/app/prova/page.tsx
export default function ProvaPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Pagina di Prova</h1>
      <p>Il progetto Next.js 'sito-prompt' funziona!</p>
      <p>Tailwind è configurato.</p>
      <p>Turbopack attivo per lo sviluppo.</p>
    </div>
  );
}
\`\`\`

**4. Verifica (Sviluppo Locale con Turbopack):**
Avvia il server di sviluppo:
\`\`\`bash
npm run dev
\`\`\`
Apri \`http://localhost:3000/prova\`. Dovresti vedere la pagina.

**5. Fermare il Server:**
Premi \`Ctrl + C\` nel terminale.

**Prossimi Passi: Creazione Homepage**
Modifichiamo \`src/app/page.tsx\`. Hai già idee specifiche o vuoi una struttura base (hero, features, CTA)?`
}

export default function ChatDemo({ type }: ChatDemoProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentPhase, setCurrentPhase] = useState<'idle' | 'user-typing' | 'ai-responding' | 'complete'>('idle')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const demoAbortControllerRef = useRef<AbortController | null>(null)

  const demoData = type === 'passive' ? PASSIVE_DEMO : PROACTIVE_DEMO

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const runFullDemo = async (abortSignal: AbortSignal) => {
    // This function now encapsulates the entire demo sequence for one run
    setCurrentPhase('idle')
    setMessages([])

    const safeSleep = (ms: number): Promise<void> => {
      return new Promise(resolve => {
        if (abortSignal.aborted) return resolve();
        const timer = setTimeout(resolve, ms)
        abortSignal.addEventListener('abort', () => clearTimeout(timer))
      });
    };

    const typeOutMessage = async (text: string, role: 'user' | 'assistant') => {
      const messageId = Date.now().toString()
      setMessages(prev => [...prev, { id: messageId, role, content: '', isTyping: true }])

      const typingSpeed = role === 'user' ? 30 : 20

      for (let i = 0; i <= text.length; i++) {
        if (abortSignal.aborted) return;
        const currentText = text.slice(0, i)
        setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, content: currentText } : msg))
        await safeSleep(typingSpeed)
      }
      if (abortSignal.aborted) return; // Check again after loop before setting isTyping to false
      setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, isTyping: false } : msg))
    };

    try {
      await safeSleep(300) // Initial pause
      if (abortSignal.aborted) throw new DOMException('Demo aborted', 'AbortError');

      setCurrentPhase('user-typing')
      await typeOutMessage(demoData.userPrompt, 'user')
      if (abortSignal.aborted) throw new DOMException('Demo aborted', 'AbortError');

      await safeSleep(700) // Pause before AI
      if (abortSignal.aborted) throw new DOMException('Demo aborted', 'AbortError');

      setCurrentPhase('ai-responding')
      await typeOutMessage(demoData.aiResponse, 'assistant')
      if (abortSignal.aborted) throw new DOMException('Demo aborted', 'AbortError');

      setCurrentPhase('complete')
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        // console.log('Demo sequence aborted successfully.');
        // Reset to a clean state if aborted mid-sequence
        setMessages([])
        setCurrentPhase('idle')
      } else {
        console.error("Error during demo:", error)
      }
    }
  };

  useEffect(() => {
    if (demoAbortControllerRef.current) {
      demoAbortControllerRef.current.abort() // Abort previous demo
    }

    const abortController = new AbortController()
    demoAbortControllerRef.current = abortController

    runFullDemo(abortController.signal)

    return () => {
      abortController.abort() // Cleanup on unmount or before next effect
      demoAbortControllerRef.current = null
    }
  }, [type, demoData.userPrompt, demoData.aiResponse]) // demoData will change if type changes. Explicitly listing properties from demoData ensures effect re-runs if these specific strings change.

  const handleReplayDemo = () => {
    if (demoAbortControllerRef.current) {
      demoAbortControllerRef.current.abort()
    }
    const newAbortController = new AbortController()
    demoAbortControllerRef.current = newAbortController
    runFullDemo(newAbortController.signal)
  }

  const getTitle = () => {
    return type === 'passive' 
      ? 'Prompt Generico Esempio' 
      : 'Prompt Ottimizzato Esempio'
  }

  const getDescription = () => {
    return type === 'passive'
      ? 'Vago, senza contesto, risultato mediocre.'
      : 'Specifico, strutturato, risultato professionale.'
  }

  const getBadgeColor = () => {
    return type === 'passive' 
      ? 'bg-red-100 text-red-700 border-red-200 dark:bg-red-700/20 dark:text-red-300 dark:border-red-600' 
      : 'bg-green-100 text-green-700 border-green-200 dark:bg-green-700/20 dark:text-green-300 dark:border-green-600'
  }

  const processBold = (textSegment: string, baseKey: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    const elements = [];
    let matchIndex = 0;
    textSegment.replace(boldRegex, (match, boldText, offset) => {
      if (offset > lastIndex) {
        elements.push(textSegment.substring(lastIndex, offset));
      }
      elements.push(<strong key={`${baseKey}-bold-${matchIndex++}`}>{boldText}</strong>);
      lastIndex = offset + match.length;
      return '';
    });
    if (lastIndex < textSegment.length) {
      elements.push(textSegment.substring(lastIndex));
    }
    return elements;
  };
  
  const renderContent = (content: string, messageId: string) => {
    const codeBlockRegex = /```(bash|tsx|typescript|javascript)?\n([\s\S]*?)```/g;
    let lastIndex = 0;
    const parts: React.ReactNode[] = [];
    let partIndex = 0;
  
    content.replace(codeBlockRegex, (match, lang, code, offset) => {
      if (offset > lastIndex) {
        parts.push(...processBold(content.substring(lastIndex, offset), `${messageId}-text-${partIndex++}`));
      }
      parts.push(
        <pre key={`${messageId}-code-${partIndex++}`} className="bg-slate-800 dark:bg-gray-900 text-white p-3 my-2 rounded-md text-xs overflow-x-auto">
          <code>{code.trim()}</code>
        </pre>
      );
      lastIndex = offset + match.length;
      return '';
    });
  
    if (lastIndex < content.length) {
      parts.push(...processBold(content.substring(lastIndex), `${messageId}-text-${partIndex++}`));
    }
    
    // Filter out empty strings that might result from processBold
    return parts.filter(part => typeof part !== 'string' || part.length > 0); 
  };

  const isDemoEffectivelyRunning = currentPhase !== 'idle' && currentPhase !== 'complete';

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden flex flex-col h-[550px] sm:h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {type === 'passive' ? (
              <MessageCircle className="w-5 h-5 text-red-500 dark:text-red-400" />
            ) : (
              <Sparkles className="w-5 h-5 text-green-500 dark:text-green-400" />
            )}
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{getTitle()}</h3>
          </div>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getBadgeColor()}`}>
            {type === 'passive' ? 'PRIMA' : 'DOPO'}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{getDescription()}</p>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2.5 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm ${
              message.role === 'user' 
                ? 'bg-blue-100 dark:bg-blue-600/30 text-blue-600 dark:text-blue-300' 
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}>
              {message.role === 'user' ? (
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </div>
            
            <div className={`flex-1 max-w-[85%] sm:max-w-[80%]`}>
              <div className={`inline-block p-2.5 sm:p-3 rounded-xl text-sm whitespace-pre-wrap shadow-sm ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-none'
              }`}>
                {renderContent(message.content, message.id)}
                {message.isTyping && (
                  <span className="inline-block w-1.5 h-3.5 bg-current opacity-50 animate-pulse ml-1" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {currentPhase === 'ai-responding' && messages.some(m => m.role === 'assistant' && m.isTyping) && (
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm px-1 pt-1">
            <Bot className="w-4 h-4 flex-shrink-0" />
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer */}
      <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
        <button
          onClick={handleReplayDemo}
          disabled={isDemoEffectivelyRunning && currentPhase !== 'complete'}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 text-white rounded-lg hover:shadow-md transition-all text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isDemoEffectivelyRunning && currentPhase !== 'complete' ? 'animate-spin' : ''}`} />
          {isDemoEffectivelyRunning && currentPhase !== 'complete' ? 'In Corso...' : 'Riproduci Demo'}
        </button>
      </div>
    </div>
  )
}
