import React from 'react'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />
      
      {/* Main Content Area */}
      <MainContent />
    </div>
  )
}
