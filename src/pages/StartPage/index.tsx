import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function handleSubmit() {
        if (!name.trim()) return 'Name not defined'
        console.log('Name : ', name);
        navigate("/quiz", {
            state: { name }
        })
    }

    return (
        <>
            
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-[500px] flex flex-col items-center">
                    <div className="bento-card w-full rounded-bento p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-secondary to-accent" />
                        <div className="text-center space-y-4">
                            <div className="inline-flex relative">
                                <div className="size-24 bg-soft-pink/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-soft-pink text-5xl">
                                        face_6
                                    </span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 size-8 bg-secondary rounded-full border-4 border-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-sm font-bold">
                                        check
                                    </span>
                                </div>
                            </div>
                            <h1 className="font-display text-4xl font-bold text-slate-800">
                                Hi there! 👋
                            </h1>
                            <p className="text-slate-500 font-medium px-4">
                                Ready to jump into the fun? Just enter your name to start your quiz
                                adventure!
                            </p>
                            <span className="text-slate-900 text-xl px-4">{name ? `Player Name : ${name}` : ''}</span>
                        </div>
                        <div className="mt-10 space-y-8">
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-600 ml-2 uppercase tracking-wider">
                                    Your Nickname
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                        sentiment_satisfied
                                    </span>
                                    <input
                                        className="w-full h-16 bg-slate-50 border-2 border-slate-100 rounded-3xl px-14 text-lg font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-300"
                                        placeholder="e.g. SuperQuizzer"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <button
                                    onClick={handleSubmit}
                                    className="w-full h-16 bg-accent hover:bg-accent/90 text-white cursor-pointer rounded-3xl text-xl font-black font-display tracking-wide shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
                                    LET'S GO!
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                        arrow_forward_ios
                                    </span>
                                </button>
                                <div className="flex items-center gap-2 py-2 px-4 bg-secondary/10 rounded-full">
                                    <span className="material-symbols-outlined text-secondary text-lg">
                                        bolt
                                    </span>
                                    <p className="text-secondary font-bold text-xs">
                                        No account needed — Start instantly!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 pt-8 border-t-2 border-dashed border-slate-100 text-center">
                            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                                <span className="material-symbols-outlined text-base">save</span>
                                <p>Your score is saved on this device locally!</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400">
                        <a
                            className="hover:text-soft-pink transition-colors flex items-center gap-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-lg">shield</span>
                            Privacy
                        </a>
                        <a
                            className="hover:text-accent transition-colors flex items-center gap-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-lg">description</span>
                            Rules
                        </a>
                        <a
                            className="hover:text-secondary transition-colors flex items-center gap-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-lg">mail</span>
                            Say Hello
                        </a>
                    </div>
                </div>
            </main>

        </>

    )
}
