import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            {/* Header */}
            <header className="max-w-full flex items-center justify-between px-6 md:px-30 py-5 bg-white/80  backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
                <Link to={'/'} className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-2xl rotate-3 flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-white text-2xl">
                            rocket_launch
                        </span>
                    </div>
                    <div>
                        <h2 className="text-slate-800 text-2xl font-display font-bold tracking-tight">
                            QuizMaster
                        </h2>
                        <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                            Fun Learning!
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Highest Score
                        </span>
                        <span className="text-lg font-bold text-secondary">
                            {localStorage.getItem()}
                        </span>
                    </div>
                    <button className="size-11 rounded-2xl bg-slate-100 text-slate-600 hover:scale-105 active:scale-95 transition-all">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                    <button className="size-12 bg-white border-2 border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-lg">help</span>
                    </button>

                </div>
            </header>

        </>
    )
}
