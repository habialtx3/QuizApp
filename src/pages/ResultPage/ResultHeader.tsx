export default function ResultHeader() {
    return (
        <>
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
        </>
    )
}
