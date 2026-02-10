import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FetchQuizQuestion } from "../../services/quizService"
import { formatQuestion } from "../../utils/formatQuestion"
import ProgressSection from "./ProgressSection"
import QuestionSection from "./QuestionSection"
import AnswerSection from "./AnswerSection"

export default function QuizPage() {

    const location = useLocation()

    const navigate = useNavigate()
    const Quiz_Local = "QUIZ-PROGRESS"
    const savedProgress = localStorage.getItem(Quiz_Local)
    const parsedProgress = savedProgress ? JSON.parse(savedProgress) : null
    const name = location.state?.name || parsedProgress?.name

    const [questionIndex, setQuestionIndex] = useState(0)
    interface Question {
        id: number
        question: string
        options: string[]
        correctAnswer: string
    }

    interface AnswerData {
        questionId: number
        selected: string | null
        correct: string
    }

    const [questions, setQuestions] = useState<Question[]>([])
    const [answers, setAnswers] = useState<AnswerData[]>([])
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

    const [score, setScore] = useState(0)
    const [start, setStart] = useState(false)
    const [timeLeft, setTimeLeft] = useState(30)
    const [finished, setFinished] = useState(false)


    // const question = [
    //     {
    //         id: 1,
    //         question: "Apa ibu kota Indonesia?",
    //         options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    //         correctAnswer: 0
    //     },
    //     {
    //         id: 2,
    //         question: "2 + 2 = ?",
    //         options: ["3", "4", "5", "6"],
    //         correctAnswer: 1
    //     }]
    useEffect(() => {
        if (!start) return


        if (timeLeft <= 0) {
            finishQuiz(score)
            return
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timer)
    }, [timeLeft, start, score])

    useEffect(() => {
        const savedProgress = localStorage.getItem(Quiz_Local)
        async function loadQuiz() {
            try {
                const amount = 10
                const category = 19
                const dificulty = 'easy'
                const rawQuestion = await FetchQuizQuestion(amount, category, dificulty)
                setQuestions(formatQuestion(rawQuestion))
                setStart(true)
            } catch (error) {
                console.error(error);
            }
        }

        if (savedProgress) {
            const data = JSON.parse(savedProgress)
            setQuestions(data.questions)
            setQuestionIndex(data.questionIndex)
            setAnswers(data.answers)
            setScore(data.score)
            setTimeLeft(data.timeLeft)
            setStart(true)
        } else {
            loadQuiz()
        }
    }, [])

    useEffect(() => {
        if (!start || !questions.length || finished) return

        const progressData = {
            name,
            questions,
            questionIndex,
            answers,
            score,
            timeLeft
        }

        localStorage.setItem(
            Quiz_Local,
            JSON.stringify(progressData)
        )
    }, [questionIndex, answers, score, timeLeft])


    useEffect(() => {
        if (!start) return
        if (questionIndex < questions.length) return
        finishQuiz(score)
    }, [questionIndex])


    if (!questions.length) {
        return <div className="p-10 text-center">Loading Question ...</div>
    }
    const currentQuestion = questions[questionIndex]
    const progress = ((questionIndex + 1) / questions.length) * 100


    function answerQuestion(
        option: string,
    ) {
        if (!option) return
        setSelectedAnswer(option)

        const isCorrect = option === currentQuestion.correctAnswer

        if (isCorrect) {
            setScore((prev: number) => prev + 1)
        }

        setAnswers((prev: AnswerData[]) => [
            ...prev,
            {
                questionId: currentQuestion.id,
                selected: option,
                correct: currentQuestion.correctAnswer
            }
        ])

        if (questionIndex === questions.length - 1) {
            finishQuiz(isCorrect ? score + 1 : score)
            return
        }

        setQuestionIndex((prev: number) => prev + 1)
    }

    function finishQuiz(finalScore: number) {

        setFinished(true)
        localStorage.removeItem(Quiz_Local)
        const resultData = {
            name,
            finalScore,
            total: questions.length,
            answers,
            date: new Date().toISOString()
        }

        const storedLeaderboard = localStorage.getItem("quizResults");
        const leaderboard = storedLeaderboard ? JSON.parse(storedLeaderboard) : [];

        localStorage.setItem(
            "quizResults",
            JSON.stringify([...leaderboard, resultData])
        )

        navigate('/result', {
            state: { finalScore, total: questions.length, answers, name }
        })
    }


    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            {/* Main */}
            <main className="flex justify-center">
                <div className="max-w-[1000px] w-full px-4 sm:px-10">
                    {/* Progress */}
                    <ProgressSection
                        name={name}
                        questionIndex={questionIndex}
                        total={questions.length}
                        progress={progress}
                        timeLeft={timeLeft}
                    />

                    {/* Question */}
                    <QuestionSection question={currentQuestion.question} />


                    {/* Answers */}
                    <AnswerSection
                        options={currentQuestion?.options ?? []}
                        selectedAnswer={selectedAnswer}
                        onAnswer={(option: string) => option && answerQuestion(option)}
                    />


                    {/* Navigation */}
                    <div className="flex flex-col items-center gap-8 pb-16">
                        <div className="flex items-center gap-2 text-slate-400">
                            <div className="flex gap-1">
                                <div className="size-2 rounded-full bg-secondary" />
                                <div className="size-2 rounded-full bg-slate-200" />
                                <div className="size-2 rounded-full bg-slate-200" />
                                <div className="size-2 rounded-full bg-slate-200" />
                                <div className="size-2 rounded-full bg-slate-200" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest ml-2">
                                Keep going! You're doing great
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
