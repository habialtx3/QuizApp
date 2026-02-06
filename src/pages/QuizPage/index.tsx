import React, { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

export default function QuizPage() {
    const location = useLocation()
    const name = location.state?.name
    const navigate = useNavigate()

    const [questionIndex, setQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)

    if (!name) {
        return <Navigate to={'/'} replace />
    }

    const question = [
        {
            id: 1,
            question: "Apa ibu kota Indonesia?",
            options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "2 + 2 = ?",
            options: ["3", "4", "5", "6"],
            correctAnswer: 1
        }]

    const currentQuestion = question[questionIndex]

    function answerQuestion(selectedAnswer: any) {
        setSelectedAnswer(selectedAnswer)
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1)
        }
        setAnswers(prev => [
            ...prev,
            {
                questionId: currentQuestion.id,
                selected: selectedAnswer,
                correct: currentQuestion.correctAnswer
            }
        ])

        if (questionIndex < question.length - 1) {
            setQuestionIndex(prev => prev + 1)
        } else {
            finishQuiz(selectedAnswer)
        }
    }

    function finishQuiz(selectedAnswer: any) {
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer
        const finalScore = isCorrect ? score + 1 : score

        navigate('/result', {
            state: { finalScore, total: question.length, answers }
        })
    }
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            {/* Main */}
            <main className="flex justify-center">
                <div className="max-w-[1000px] w-full px-4 sm:px-10">
                    {/* Progress */}
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
                        <div className="flex-1 w-full max-w-md bento-card rounded-bento p-6">
                            <div className="flex justify-between items-end mb-3">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        {`${name}'s Journey`}
                                    </span>
                                    <p className="text-xl font-display font-bold text-slate-700">
                                        Question 1{" "}
                                        <span className="text-slate-300 font-medium">
                                            / 10
                                        </span>
                                    </p>
                                </div>
                                <div className="size-8 rounded-full bg-accent/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent text-sm font-bold">
                                        stars
                                    </span>
                                </div>
                            </div>

                            <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="absolute h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500"
                                    style={{ width: "10%" }}
                                />
                            </div>
                        </div>

                        {/* Timer */}
                        <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-3xl shadow-sm border border-slate-100">
                            <div className="size-14 rounded-full bg-soft-pink/20 flex items-center justify-center border-4 border-white">
                                <span className="text-soft-pink font-display font-bold text-2xl">
                                    45
                                </span>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase">
                                    Time Left
                                </p>
                                <p className="text-slate-700 font-display font-bold">
                                    Seconds
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Question */}
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                            Geography Challenge 🌍
                        </div>
                        <h1 className="text-slate-800 text-3xl md:text-5xl font-display font-bold leading-tight max-w-2xl mx-auto">
                            {currentQuestion.question}
                        </h1>
                    </div>

                    {/* Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                        {currentQuestion.options.map((option, i) => (
                            <Answer
                                selected={selectedAnswer === i}
                                key={i}
                                label={option}
                                onClick={() => answerQuestion(i)}
                                img="https://lh3.googleusercontent.com/aida-public/AB6AXuBPD0FWvq3HtyrQYd9XlDJvyRhUTRiHeyx5iSZf-6tepZ9XFgJa6ImlGKzVgR5rKIkUYc33tpJ0VxEscQ405Ga6ZK57Go-hRh6fSiJNPWNaV9MOAJqhrjvNr_qVKJIuDh1FiOpFjyXjFSrWXIwETgxJrXj32SFWNHgFKdnXpW_qu0Ui86U5aQjePZmtGKULDjWE4OsxiSONBsBIS_DfqfWHzzuFpAu3rBTJlsorwn0plrtHWONkQFMO2ERM9zcslh3MosnliGUe3y3Y"

                            />
                        ))}

                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center gap-8 pb-16">
                        <div className="flex items-center gap-4 w-full max-w-lg">
                            <button className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-500 font-bold hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2">
                                <span className="material-symbols-outlined">
                                    arrow_back
                                </span>
                                Back
                            </button>

                            <button className="flex-1 px-8 py-4 rounded-2xl bg-accent text-white font-display text-xl font-bold shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                                Next Question
                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </button>
                        </div>

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

function Answer({ label, img, selected, badge, onClick }) {
    return (
        <button
            className={`flex flex-col gap-4 p-5 rounded-3xl border-4 transition-all group
                ${selected
                    ? "border-primary shadow-lg"
                    : "border-transparent hover:border-secondary/30 hover:-translate-y-1"
                } bg-white`}
            onClick={onClick}
        >
            <div
                className="w-full aspect-video rounded-2xl bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: img
                        ? `url("${img}")`
                        : "linear-gradient(135deg, #f1f5f9, #e2e8f0)"
                }}
            />

            <div className="flex items-center justify-between px-2">
                <span className="text-2xl font-display font-bold text-slate-800">
                    {label}
                </span>
                {selected && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-white">
                        {badge}
                    </span>
                )}
            </div>
        </button>
    )
}
