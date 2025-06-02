"use client"

import { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { courseBase } from '@/data/courseBase'
import { Course, Module, Exercise, ModuleContent } from '@/types/course'
import { ChevronLeft, ChevronRight, Clock, CheckCircle, Lock, Play, BookOpen, Lightbulb, AlertTriangle, HelpCircle, Award, XCircle, Check, LayoutDashboard } from 'lucide-react'
import { renderMarkdownParagraphs } from '@/utils/markdownProcessor'

// Define minimum pass rate for the quiz (e.g., 80%)
const QUIZ_PASS_PERCENTAGE = 0.8

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  
  const [course, setCourse] = useState<Course | null>(null)
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set())
  const [showCompletionNotification, setShowCompletionNotification] = useState(false)

  // State for quiz (Module 6)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | string>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)
  const [quizPassed, setQuizPassed] = useState<boolean | null>(null)

  // Load progress from localStorage
  useEffect(() => {
    if (user?.uid && params.courseId) {
      const storageKey = `course_progress_${user.uid}_${params.courseId}`
      const savedProgress = localStorage.getItem(storageKey)
      if (savedProgress) {
        try {
          const { completedModules: savedCompleted, currentModule } = JSON.parse(savedProgress)
          setCompletedModules(new Set(savedCompleted))
          if (currentModule !== undefined) {
            setCurrentModuleIndex(currentModule)
          }
        } catch (error) {
          console.error('Error loading saved progress:', error)
        }
      }
    }
  }, [user?.uid, params.courseId])

  // Save progress to localStorage
  const saveProgress = (completed: Set<string>, moduleIndex: number) => {
    if (user?.uid && params.courseId) {
      const storageKey = `course_progress_${user.uid}_${params.courseId}`
      const progressData = {
        completedModules: Array.from(completed),
        currentModule: moduleIndex,
        lastUpdated: new Date().toISOString()
      }
      localStorage.setItem(storageKey, JSON.stringify(progressData))
    }
  }

  useEffect(() => {
    if (params.courseId === 'corso-base') {
      const courseData = JSON.parse(JSON.stringify(courseBase)) as Course // Deep copy
      setCourse(courseData)
    }
  }, [params.courseId])

  useEffect(() => {
    if (!authLoading && !user) {
      // Allow access to 'corso-base' for dev/testing purposes even if not logged in
      if (params.courseId !== 'corso-base') {
        router.push('/')
      }
    }
  }, [user, authLoading, router, params.courseId])

  const currentModule = useMemo(() => {
    if (!course) return null
    return course.modules[currentModuleIndex]
  }, [course, currentModuleIndex])

  const isQuizModule = useMemo(() => currentModule?.id === 'modulo-6', [currentModule])

  const handleQuizAnswerChange = (exerciseId: string, answer: number | string) => {
    if (quizSubmitted) return // Don't allow changes after submission
    setQuizAnswers(prev => ({ ...prev, [exerciseId]: answer }))
  }

  const handleSubmitQuiz = () => {
    if (!currentModule || !currentModule.exercises) return

    let correctAnswers = 0
    currentModule.exercises.forEach(ex => {
      if (quizAnswers[ex.id] === ex.correctAnswer) {
        correctAnswers++
      }
    })
    
    const score = correctAnswers / currentModule.exercises.length
    setQuizScore(score)
    const passed = score >= QUIZ_PASS_PERCENTAGE
    setQuizPassed(passed)
    setQuizSubmitted(true)

    if (passed) {
      markModuleComplete(currentModule.id)
    }
  }

  const markModuleComplete = (moduleId: string) => {
    setCompletedModules(prev => {
      const newSet = new Set(prev)
      if (!newSet.has(moduleId)) {
        newSet.add(moduleId)
        // Show completion notification
        setShowCompletionNotification(true)
        setTimeout(() => setShowCompletionNotification(false), 3000)
        
        // Save progress
        saveProgress(newSet, currentModuleIndex)
      }
      return newSet
    })
  }

  const goToModule = (index: number) => {
    // Reset quiz state if navigating away from or to the quiz module
    if (course?.modules[index].id === 'modulo-6' || isQuizModule) {
        if (course?.modules[index].id !== 'modulo-6' || !quizSubmitted) {
            setQuizAnswers({})
        }
    }
    setCurrentModuleIndex(index)
    saveProgress(completedModules, index)
  }
  
  const completeAndNext = () => {
    if (currentModule) {
      if (!isQuizModule) {
        markModuleComplete(currentModule.id)
      } else { 
        if (!quizSubmitted) {
          alert("Devi prima inviare il quiz per completare questo modulo.")
          return;
        }
        if (!quizPassed) {
          alert("Devi superare il quiz per marcare questo modulo come completo e procedere.")
          return;
        }
      }
    }
    if (course && currentModuleIndex < course.modules.length - 1) {
      goToModule(currentModuleIndex + 1)
    } else {
      alert("🎉 Congratulazioni! Hai completato tutto il corso!")
    }
  }

  const getCompletionPercentage = () => {
    if (!course) return 0
    return Math.round((completedModules.size / course.modules.length) * 100)
  }

  if (authLoading && params.courseId !== 'corso-base') { // Show loading only if auth is strictly required
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Caricamento autenticazione...</p>
        </div>
      </div>
    )
  }

  // If auth is not loading, but user is null and course is not 'corso-base', redirect handled by useEffect.
  // If course is 'corso-base', it can be viewed without login for dev purposes.

  if (!course || !currentModule) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Corso non trovato o modulo non caricato</h1>
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

  const getContentIcon = (type: ModuleContent['type']) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5 text-blue-500" />
      case 'tip': return <Lightbulb className="w-5 h-5 text-yellow-500" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-red-500" />
      case 'example': return <BookOpen className="w-5 h-5 text-green-500" />
      default: return <HelpCircle className="w-5 h-5 text-slate-500" />
    }
  }

  const getContentStyle = (type: ModuleContent['type']) => {
    switch (type) {
      case 'tip': return 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600'
      case 'warning': return 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-600'
      case 'example': return 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 dark:border-green-600'
      default: return 'bg-white dark:bg-slate-800'
    }
  }
  
  const totalModules = course.modules.length;
  const isLastModule = currentModuleIndex === totalModules - 1;
  const isCorsoBase = params.courseId === 'corso-base';

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {showCompletionNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-slide-in-right">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Modulo completato! ✨</span>
        </div>
      )}

      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted to max-w-screen-2xl for wider layout */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => router.push('/')}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Torna alla home"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-md sm:text-lg font-semibold text-slate-900 dark:text-white truncate max-w-[150px] sm:max-w-xs md:max-w-md lg:max-w-lg">
                  {course.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Modulo {currentModuleIndex + 1}/{totalModules}: {currentModule.title}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-xs">
                    {getCompletionPercentage()}%
                  </span>
                </div>
                <span className="hidden md:inline">Completato</span>
              </div>
              
              {user?.photoURL && (
                <img src={user.photoURL} alt="User avatar" className="w-8 h-8 rounded-full hidden sm:block"/>
              )}
              <div className="text-sm text-slate-600 dark:text-slate-300 hidden md:block">
                {user?.displayName || (isCorsoBase ? 'Sviluppatore' : 'Studente')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"> {/* Adjusted to max-w-screen-2xl */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Sidebar - Indice Moduli (Left) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 sm:p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Indice del Corso</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {completedModules.size}/{totalModules}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getCompletionPercentage()}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {getCompletionPercentage()}% completato
                </p>
              </div>

              <div className="space-y-2">
                {course.modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => goToModule(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      index === currentModuleIndex
                        ? 'bg-blue-100 dark:bg-blue-600/20 border-l-4 border-blue-500 dark:border-blue-400 shadow-md'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border-l-4 border-transparent'
                    } ${completedModules.has(module.id) && index !== currentModuleIndex ? 'opacity-70 hover:opacity-100' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium ${
                        index === currentModuleIndex
                          ? 'text-blue-700 dark:text-blue-300'
                          : (completedModules.has(module.id) ? 'text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-100')
                      }`}>
                        Modulo {index + 1}
                      </span>
                      {completedModules.has(module.id) ? (
                        <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                          <Check className="w-3.5 h-3.5 text-white font-bold" />
                        </div>
                      ) : (
                        <div className={`w-5 h-5 border-2 ${
                          index === currentModuleIndex 
                            ? 'border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-slate-300 dark:border-slate-600'
                        } rounded-full flex items-center justify-center`}>
                          {index === currentModuleIndex && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      )}
                    </div>
                    <p className={`text-xs truncate ${
                      index === currentModuleIndex
                        ? 'text-blue-600 dark:text-blue-400'
                        : (completedModules.has(module.id) ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-300')
                    }`}>
                      {module.title}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3 mr-1.5" />
                        {module.duration}
                      </div>
                      {completedModules.has(module.id) && (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Visto
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area (Center) */}
          {/* Adjusted to lg:col-span-6 if concept map is visible, otherwise lg:col-span-9 */}
          <div className={isCorsoBase ? "lg:col-span-6" : "lg:col-span-9"}>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="p-5 sm:p-6 md:p-8 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {currentModule.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
                      {currentModule.description}
                    </p>
                  </div>
                  {completedModules.has(currentModule.id) && (
                    <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Completato
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {currentModule.duration}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {currentModule.content.map((contentItem, index) => (
                  <div
                    key={`content-${index}`}
                    className={`p-4 sm:p-5 rounded-lg shadow-sm ${getContentStyle(contentItem.type)}`}
                  >
                    {contentItem.title && (
                      <div className="flex items-center mb-3">
                        <span className="mr-2">{getContentIcon(contentItem.type)}</span>
                        <h3 className="text-md sm:text-lg font-semibold text-slate-800 dark:text-slate-100">
                          {contentItem.title}
                        </h3>
                      </div>
                    )}
                    <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed">
                      {renderMarkdownParagraphs(contentItem.content)}
                    </div>
                    {contentItem.codeExample && (
                      <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg mt-4 overflow-x-auto text-xs sm:text-sm">
                        <code>{contentItem.codeExample}</code>
                      </pre>
                    )}
                  </div>
                ))}

                {currentModule.exercises && currentModule.exercises.length > 0 && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-6 sm:pt-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-5 sm:mb-6">
                      {isQuizModule ? 'Quiz Finale' : 'Esercizi Pratici'}
                    </h3>
                    
                    {isQuizModule && quizSubmitted && quizScore !== null && (
                      <div className={`p-4 sm:p-5 mb-6 rounded-lg border-l-4 ${quizPassed ? 'bg-green-50 dark:bg-green-900/30 border-green-500' : 'bg-red-50 dark:bg-red-900/30 border-red-500'}`}>
                        <div className="flex items-center">
                          {quizPassed ? <Award className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" /> : <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />}
                          <h4 className="text-lg font-semibold">
                            {quizPassed ? 'Quiz Superato!' : 'Quiz Non Superato'}
                          </h4>
                        </div>
                        <p className="mt-1 text-sm">
                          Il tuo punteggio: {Math.round(quizScore * 100)}% ({Math.round(quizScore * currentModule.exercises.length)} su {currentModule.exercises.length} corrette).
                          {quizPassed ? " Ottimo lavoro!" : ` È richiesto un punteggio minimo del ${QUIZ_PASS_PERCENTAGE*100}% per passare.`}
                        </p>
                        {!quizPassed && (
                           <button 
                            onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); setQuizScore(null); setQuizPassed(null);}}
                            className="mt-3 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md transition-colors"
                           >
                             Riprova Quiz
                           </button>
                        )}
                      </div>
                    )}

                    <div className="space-y-6">
                      {currentModule.exercises.map((exercise, index) => (
                        <div key={exercise.id} className={`p-4 sm:p-5 rounded-lg shadow-sm ${isQuizModule && quizSubmitted && exercise.correctAnswer !== quizAnswers[exercise.id] ? 'bg-red-50 dark:bg-red-900/20 border-l-2 border-red-400' : 'bg-slate-50 dark:bg-slate-800/40'}`}>
                          <h4 className="font-medium text-slate-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                            Domanda {index + 1}: {exercise.question}
                          </h4>
                          {exercise.type === 'multiple-choice' && exercise.options && (
                            <div className="space-y-2.5">
                              {exercise.options.map((option, optIndex) => (
                                <label 
                                  key={optIndex} 
                                  className={`flex items-center space-x-3 p-2.5 rounded-md transition-colors cursor-pointer ${
                                    quizAnswers[exercise.id] === optIndex 
                                      ? 'bg-blue-100 dark:bg-blue-600/30 ring-2 ring-blue-500' 
                                      : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
                                  } ${quizSubmitted && exercise.correctAnswer === optIndex ? 'bg-green-100 dark:bg-green-600/30 ring-2 ring-green-500' : ''}
                                  ${quizSubmitted && exercise.correctAnswer !== optIndex && quizAnswers[exercise.id] === optIndex ? 'bg-red-100 dark:bg-red-600/30 ring-2 ring-red-500' : ''}
                                  `}
                                >
                                  <input 
                                    type="radio" 
                                    name={`exercise-${exercise.id}`} 
                                    value={optIndex}
                                    checked={quizAnswers[exercise.id] === optIndex}
                                    onChange={() => handleQuizAnswerChange(exercise.id, optIndex)}
                                    disabled={quizSubmitted}
                                    className="form-radio h-4 w-4 text-blue-600 border-slate-300 dark:border-slate-600 focus:ring-blue-500 dark:bg-slate-700 dark:checked:bg-blue-500" 
                                  />
                                  <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">{option}</span>
                                </label>
                              ))}
                            </div>
                          )}
                          {exercise.type === 'text' && ( 
                            <textarea
                              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              rows={4}
                              placeholder="Scrivi la tua risposta qui..."
                              value={(quizAnswers[exercise.id] as string) || ''}
                              onChange={(e) => handleQuizAnswerChange(exercise.id, e.target.value)}
                              disabled={quizSubmitted}
                            />
                          )}
                           {quizSubmitted && exercise.explanation && (
                            <div className="mt-3 p-2.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-700/50 rounded-md">
                              <p><strong>Spiegazione:</strong> {exercise.explanation}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {isQuizModule && !quizSubmitted && (
                      <button
                        onClick={handleSubmitQuiz}
                        className="mt-6 sm:mt-8 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                      >
                        Invia Quiz
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 md:p-8 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => currentModuleIndex > 0 && goToModule(currentModuleIndex - 1)}
                  disabled={currentModuleIndex === 0}
                  className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Modulo Precedente</span>
                </button>

                <button
                  onClick={completeAndNext}
                  disabled={(isQuizModule && (!quizSubmitted || !quizPassed)) && !isLastModule}
                  className={`flex items-center space-x-2 px-6 py-2.5 text-sm font-medium rounded-lg transition-colors
                    ${(isQuizModule && (!quizSubmitted || !quizPassed)) && !isLastModule
                      ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                    }
                  `}
                >
                  {completedModules.has(currentModule.id) && !isLastModule && !(isQuizModule && !quizPassed) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Vai al Prossimo Modulo</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>
                        {isLastModule ? (isQuizModule && quizPassed ? 'Termina Corso' : (isQuizModule ? 'Termina Corso (Quiz non superato)' : 'Termina Corso')) : 'Completa e Vai Avanti'}
                      </span>
                      {!isLastModule && <ChevronRight className="w-4 h-4" />}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Concept Map (Right Sidebar for corso-base) */}
          {isCorsoBase && (
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 sm:p-6 sticky top-24">
                <div className="flex items-center mb-4">
                  <LayoutDashboard className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Mappa Concettuale</h3>
                </div>
                <div className="max-h-[calc(100vh-10rem)] overflow-y-auto space-y-4 pr-2">
                  {course.modules.map((module, moduleIdx) => (
                    <div 
                      key={module.id}
                      className={`p-3 rounded-lg transition-all ${moduleIdx === currentModuleIndex ? 'bg-blue-50 dark:bg-blue-900/30 ring-1 ring-blue-400' : 'bg-slate-50 dark:bg-slate-800/30'}`}
                    >
                      <h4 
                        className={`font-medium text-sm cursor-pointer flex items-center justify-between ${moduleIdx === currentModuleIndex ? 'text-blue-700 dark:text-blue-300' : 'text-slate-800 dark:text-slate-200'}`}
                        onClick={() => goToModule(moduleIdx)}
                      >
                        <span>Modulo {moduleIdx + 1}: {module.title}</span>
                        {completedModules.has(module.id) && <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />}
                      </h4>
                      {moduleIdx === currentModuleIndex && module.content && module.content.length > 0 && (
                        <ul className="mt-2 space-y-1.5 pl-3 border-l-2 border-blue-200 dark:border-blue-700">
                          {module.content.filter(item => item.title).map((contentItem, contentIdx) => (
                            <li key={`map-content-${module.id}-${contentIdx}`} className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                              {contentItem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
