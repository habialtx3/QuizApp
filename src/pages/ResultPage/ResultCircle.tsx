export default function ResultCircle({ finalScore, total }) {
    const comparisonChart = Math.round((finalScore / total) * 100)

    const radius = 90
    const stroke = 14
    const normalizedRadius = radius - stroke / 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset = circumference - (comparisonChart / 100) * circumference


    return (
        <>

            <div className="relative w-56 h-56 flex items-center justify-center">
                {/* SVG Progress */}
                <svg height={radius * 2} width={radius * 2}>
                    {/* Background circle */}
                    <circle
                        stroke="#E5E7EB"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />

                    {/* Progress circle */}
                    <circle
                        stroke="currentColor"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="text-accent transition-all duration-700 ease-out"
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                        }}
                    />
                </svg>

                {/* Center content */}
                <div className="absolute text-center">
                    <span className="block text-slate-800 text-5xl font-black font-display">
                        {finalScore}/{total}
                    </span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Score
                    </span>
                    <p className="text-accent font-bold text-sm mt-1">
                        {comparisonChart}%
                    </p>
                </div>

                {/* Trophy badge */}
                <div className="absolute -top-3 -right-3 size-12 bg-secondary rounded-full border-4 border-white shadow-xl flex items-center justify-center rotate-12">
                    <span className="material-symbols-outlined text-white text-2xl">
                        emoji_events
                    </span>
                </div>
            </div>
        </>
    )
}
