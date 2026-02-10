export default function AnswerSection({
    options,
    selectedAnswer,
    onAnswer
}: AnswerSectionProps) {

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

interface AnswerSectionProps {
    options: string[]
    selectedAnswer: string | null
    onAnswer: (option: string) => void
}

interface AnswerProps {
    label: string
    selected: boolean
    onClick: () => void
}


function Answer({ label, selected, onClick }: AnswerProps) {
    return (
        <button
            className={`flex flex-col gap-4 p-5 rounded-3xl border-4 transition-all group 
            ${selected ? "border-slate-300" : "border-slate-300 hover:border-secondary hover:shadow-lg"} 
            bg-white`}
            onClick={onClick}
        >
            <span className="block text-2xl md:text-3xl font-bold text-slate-600">
                {label}
            </span>
        </button>
    )
}

