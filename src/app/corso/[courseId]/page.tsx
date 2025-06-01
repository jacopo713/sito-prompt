"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { courseBase } from '@/data/courseBase'
import { Course, Module } from '@/types/course'
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Lock, Play, BookOpen, Lightbulb, AlertTriangle } from 'lucide-react'

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const [course, setCourse] = useState<Course | null>(null)
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Per ora supportiamo solo il corso base
    if (params.courseId === 'corso-base') {
      setCourse(courseBase)
    }
  }, [params.courseId])

  // Redirect se non autenticato
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/')
    }
  }, [user, authLoading, router])

  const markModuleComplete = (moduleId: string) => {
    setCompletedModules(prev => new Set(prev).add(moduleId))
  }

  const goToModule = (index: number) => {
    setCurrentModuleIndex(index)
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Caricamento...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Verrà fatto il redirect
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Corso non trovato</h1>
          <button 
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Torna alla Home
          </button>
        </div>
      </div>
    )
  }

  const currentModule = course.modules[currentModuleIndex]

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5" />
      case 'tip': return <Lightbulb className="w-5 h-5" />
      case 'warning': return <AlertTriangle className="w-5 h-5" />
      default: return <BookOpen className="w-5 h-5" />
    }
  }

  const getContentStyle = (type: string) => {
    switch (type) {
      case 'tip': return 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400'
      case 'warning': return 'bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400'
      case 'example': return 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400'
      default: return 'bg-white dark:bg-slate-800'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/')}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {course.title}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Modulo {currentModuleIndex + 1} di {course.modules.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Ciao, {user.displayName || 'Studente'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Indice Moduli */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Moduli del Corso</h3>
              <div className="space-y-3">
                {course.modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => goToModule(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentModuleIndex
                        ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium ${
                        index === currentModuleIndex
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-slate-900 dark:text-white'
                      }`}>
                        Modulo {index + 1}
                      </span>
                      {completedModules.has(module.id) ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full" />
                      )}
                    </div>
                    <p className={`text-xs ${
                      index === currentModuleIndex
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {module.title}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              {/* Module Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {currentModule.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {currentModule.description}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentModule.duration}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Modulo {currentModuleIndex + 1} di {course.modules.length}
                  </div>
                </div>
              </div>

              {/* Module Content */}
              <div className="p-6 space-y-8">
                {currentModule.content.map((content, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg ${getContentStyle(content.type)}`}
                  >
                    {content.title && (
                      <div className="flex items-center mb-4">
                        {getContentIcon(content.type)}
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white ml-2">
                          {content.title}
                        </h3>
                      </div>
                    )}
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      {content.content.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {content.codeExample && (
                      <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg mt-4 overflow-x-auto">
                        <code>{content.codeExample}</code>
                      </pre>
                    )}
                  </div>
                ))}

                {/* Exercises */}
                {currentModule.exercises && currentModule.exercises.length > 0 && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                      Esercizi Pratici
                    </h3>
                    <div className="space-y-6">
                      {currentModule.exercises.map((exercise, index) => (
                        <div key={exercise.id} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                          <h4 className="font-medium text-slate-900 dark:text-white mb-4">
                            Esercizio {index + 1}: {exercise.question}
                          </h4>
                          {exercise.type === 'multiple-choice' && exercise.options && (
                            <div className="space-y-2">
                              {exercise.options.map((option, optIndex) => (
                                <label key={optIndex} className="flex items-center space-x-3 cursor-pointer">
                                  <input type="radio" name={`exercise-${exercise.id}`} className="text-blue-600" />
                                  <span className="text-slate-700 dark:text-slate-300">{option}</span>
                                </label>
                              ))}
                            </div>
                          )}
                          {exercise.type === 'text' && (
                            <textarea
                              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                              rows={4}
                              placeholder="Scrivi la tua risposta qui..."
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <button
                  onClick={() => currentModuleIndex > 0 && goToModule(currentModuleIndex - 1)}
                  disabled={currentModuleIndex === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Modulo Precedente</span>
                </button>

                <button
                  onClick={() => markModuleComplete(currentModule.id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Completa Modulo
                </button>

                <button
                  onClick={() => currentModuleIndex < course.modules.length - 1 && goToModule(currentModuleIndex + 1)}
                  disabled={currentModuleIndex === course.modules.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Modulo Successivo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
