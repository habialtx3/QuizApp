export default function ProgressSection({
    name,
    questionIndex,
    total,
    progress,
    timeLeft
}) {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex-1 w-full max-w-md bento-card rounded-bento p-6">
                <div className="flex justify-between items-end mb-3">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            {name}'s Journey
                        </span>
                        <p className="text-xl font-display font-bold text-slate-700">
                            Question {questionIndex + 1}
                            <span className="text-slate-300 font-medium">
                                / {total}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="absolute h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-3xl shadow-sm">
                <span className="text-2xl font-bold">{timeLeft}</span>
                <span className="text-slate-400 text-sm">Seconds</span>
            </div>
        </div>
    )
}
