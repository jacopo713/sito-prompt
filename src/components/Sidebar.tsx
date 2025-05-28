import React from 'react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-lg font-bold">Sito Prompt</h1>
      </div>
      <nav className="p-4">
        <a href="/" className="block py-2">Home</a>
        <a href="/prompting" className="block py-2">Prompting</a>
        <a href="/metacognition" className="block py-2">Metacognizione</a>
        <a href="/settings" className="block py-2">Impostazioni</a>
      </nav>
    </div>
  )
}
