// src/context/QuizContext.tsx
import { createContext, useContext, useState, ReactNode } from "react"

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export interface Answer {
  questionId: number
  selected: string
  correct: string
}

interface QuizContextType {
  name: string
  setName: (n: string) => void
  questions: Question[]
  setQuestions: (q: Question[]) => void
  questionIndex: number
  setQuestionIndex: (i: number) => void
  selectedAnswer: string | null
  setSelectedAnswer: (a: string | null) => void
  answers: Answer[]
  setAnswers: (a: Answer[]) => void
  score: number
  setScore: (s: number) => void
  timeLeft: number
  setTimeLeft: (t: number) => void
  finished: boolean
  setFinished: (f: boolean) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [finished, setFinished] = useState(false)

  return (
    <QuizContext.Provider
      value={{
        name,
        setName,
        questions,
        setQuestions,
        questionIndex,
        setQuestionIndex,
        selectedAnswer,
        setSelectedAnswer,
        answers,
        setAnswers,
        score,
        setScore,
        timeLeft,
        setTimeLeft,
        finished,
        setFinished
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) throw new Error("useQuiz must be used inside QuizProvider")
  return context
}
