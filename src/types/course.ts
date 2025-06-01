export interface Module {
  id: string
  title: string
  description: string
  duration: string
  content: ModuleContent[]
  exercises?: Exercise[]
  isCompleted?: boolean
  isLocked?: boolean
}

export interface ModuleContent {
  type: 'text' | 'video' | 'example' | 'tip' | 'warning'
  title?: string
  content: string
  videoUrl?: string
  codeExample?: string
}

export interface Exercise {
  id: string
  question: string
  type: 'multiple-choice' | 'text' | 'prompt-practice'
  options?: string[]
  correctAnswer?: string | number
  explanation?: string
}

export interface Course {
  id: string
  title: string
  description: string
  level: 'BASE' | 'MEDIUM' | 'ADVANCED'
  modules: Module[]
  totalDuration: string
  prerequisites?: string[]
  learningObjectives: string[]
}
