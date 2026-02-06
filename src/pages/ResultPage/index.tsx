import React from "react"
import { useLocation } from "react-router-dom"

export default function ResultPage() {

    const location = useLocation()
    console.log(location.state?.finalScore);

    return (
        <>

            {/* Main */}
            <main className="flex-1 flex items-center justify-center px-4 py-10 relative">
                <div className="max-w-[850px] w-full bento-card rounded-bento p-8 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-secondary to-accent" />

                    {/* Title */}
                    <div className="text-center mb-14 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
                            <span className="material-symbols-outlined text-secondary animate-bounce">
                                party_mode
                            </span>
                            <span className="material-symbols-outlined text-accent animate-bounce delay-75">
                                stars
                            </span>
                            <span className="material-symbols-outlined text-soft-pink animate-bounce delay-150">
                                celebration
                            </span>
                        </div>

                        <h1 className="text-slate-800 text-5xl md:text-6xl font-black font-display tracking-tight mb-4">
                            Quiz Completed!
                        </h1>

                        <div className="inline-block px-6 py-2 rounded-full bg-secondary text-white text-lg font-extrabold rotate-[-2deg] shadow-lg mb-6">
                            ✨ Great Job! ✨
                        </div>

                        <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
                            You finished the quiz like a pro 🚀
                        </p>
                    </div>

                    {/* Score */}
                    <div className="flex flex-col lg:flex-row items-center gap-14 mb-14">
                        <div className="relative">
                            <div className="w-56 h-56 rounded-full bg-accent/10 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="block text-slate-800 text-6xl font-black font-display">
                                        8/10
                                    </span>
                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                                        Score
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 size-14 bg-secondary rounded-full border-4 border-white shadow-xl flex items-center justify-center rotate-12">
                                <span className="material-symbols-outlined text-white text-3xl">
                                    emoji_events
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-700 text-xl font-bold">
                                    Your Performance
                                </h3>
                                <span className="text-secondary font-black text-2xl">
                                    80%
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Stat label="Total Questions" value={`${location.state.total}`} icon="fact_check" />
                                <Stat label="Answered" value={`${location.state.total}`} icon="edit_square" />
                                <Stat
                                    label="Correct"
                                    value={location.state.finalScore}
                                    icon="check_circle"
                                    accent="secondary"
                                />
                                <Stat
                                    label="Incorrect"
                                    value={`${location.state.total - location.state.finalScore}`}
                                    icon="cancel"
                                    accent="soft-pink"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="flex-1 h-16 bg-accent text-white rounded-3xl text-lg font-black font-display tracking-wide shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">
                                restart_alt
                            </span>
                            Restart Quiz
                        </button>

                        <button className="flex-1 h-16 bg-white border-2 border-slate-100 rounded-3xl text-lg font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">
                                grid_view
                            </span>
                            Dashboard
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-slate-300 text-xs font-bold uppercase tracking-widest">
                © 2024 QuizMaster Fun Edition
            </footer>
        </>
    )
}

function Stat({ label, value, icon, accent = "accent" }) {
    return (
        <div className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100`}>
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">
                {label}
            </p>
            <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-black text-${accent}`}>
                    {value}
                </span>
                <span className={`material-symbols-outlined text-${accent}`}>
                    {icon}
                </span>
            </div>
        </div>
    )
}
