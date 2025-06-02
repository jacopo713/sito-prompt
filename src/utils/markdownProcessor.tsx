import React from 'react'

export function processMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  
  return parts.map((part, index) => {
    // Bold text (**text**)
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2)
      return (
        <strong key={index} className="font-semibold text-slate-900 dark:text-white">
          {content}
        </strong>
      )
    }
    
    // Italic text (*text*)
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      const content = part.slice(1, -1)
      return (
        <em key={index} className="italic">
          {content}
        </em>
      )
    }
    
    // Regular text
    return <span key={index}>{part}</span>
  })
}

export function renderMarkdownParagraphs(content: string): React.ReactNode[] {
  return content.split('\n').map((paragraph, pIndex) => {
    if (paragraph.trim() === '') return null
    
    return (
      <p key={pIndex} className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
        {processMarkdown(paragraph)}
      </p>
    )
  }).filter(Boolean)
}
