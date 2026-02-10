export default function AnswerSection({
    options,
    selectedAnswer,
    onAnswer
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {options.map((option, i) => (
                <Answer
                    key={i}
                    label={option}
                    selected={selectedAnswer === option}
                    onClick={() => onAnswer(option)}
                />
            ))}
        </div>
    )
}


function Answer({ label, selected, onClick }) {
    return (
        <button
            className={`flex flex-col gap-4 p-5 rounded-3xl border-slate-300 border-4 transition-all group hover:border-secondary hover:border-2  hover:shadow-lg bg-white`}
            onClick={onClick}
        >
            <div
                className="w-full aspect-video rounded-2xl bg-cover bg-center overflow-hidden"

            />

            <div className="flex items-center justify-between px-2">
                <span className="text-2xl font-display font-bold text-slate-800">
                    {label}
                </span>

            </div>
        </button>
    )
}

