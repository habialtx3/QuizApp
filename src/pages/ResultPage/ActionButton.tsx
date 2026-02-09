import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ActionButton({ name }: { name: String }) {
    const navigate = useNavigate()

    function restartQuiz() {
        localStorage.removeItem("QUIZ-PROGRESS")

        const changeName = window.confirm("Do you want to change name ?")

        if (changeName) {
            navigate('/')
        } else {
            navigate('/quiz', {
                state: { name }
            })
        }
    }

    function goToDashboard() {
        navigate('/')
    }
    return (
        <div className="flex flex-col sm:flex-row gap-6">
            <button
                onClick={restartQuiz}
                className="flex-1 h-16 bg-accent text-white rounded-3xl text-lg font-black font-display tracking-wide shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">
                    restart_alt
                </span>
                Restart Quiz
            </button>

            <button onClick={goToDashboard} className="flex-1 h-16 bg-white border-2 border-slate-100 rounded-3xl text-lg font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">
                    grid_view
                </span>
                Dashboard
            </button>
        </div>
    )
}
