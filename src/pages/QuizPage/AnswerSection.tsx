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
            className={`flex flex-col gap-4 p-5 rounded-3xl border-slate-300 border-4 transition-all group hover:border-secondary hover:border-5  hover:shadow-lg bg-white`}
            onClick={onClick}
        >
            <span className="block text-2xl md:text-3xl font-bold text-slate-600">
                {label}
            </span>
        </button>
    )
}

