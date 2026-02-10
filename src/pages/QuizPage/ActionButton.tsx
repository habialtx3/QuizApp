export default function ActionButton({ onBack, onNext }: ActionButtonProps) {
    return (
        <div className="flex gap-4 w-full max-w-lg mx-auto">
            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

interface ActionButtonProps {
    onBack: () => void
    onNext: () => void
}
