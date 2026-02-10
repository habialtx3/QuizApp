import { useLocation } from "react-router-dom"
import ResultHeader from "./ResultHeader"
import Stats from "./Stats"
import ActionButton from "./ActionButton"
import ResultCircle from "./ResultCircle"

export default function ResultPage() {
    const location = useLocation()
    const { finalScore, total, answers, name } = location.state as ResultState

    const answered = answers.filter(a => a.selected !== null).length
    const incorrect = answers.filter(a => a.selected !== null && a.selected !== a.correct).length

    return (
        <>
            <main className="flex-1 flex items-center justify-center px-4 py-10 relative">
                <div className="max-w-[850px] w-full bento-card rounded-bento p-8 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-secondary to-accent" />
                    <ResultHeader />
                    <div className="flex flex-col lg:flex-row items-center gap-14 mb-14">
                        <ResultCircle finalScore={finalScore} total={total} />
                        <Stats total={total} finalScore={finalScore} incorrect={incorrect} answered={answered} />
                    </div>
                    <ActionButton name={name} />
                </div>
            </main>
        </>
    )
}

interface AnswerData {
    questionId: number
    selected: string | null
    correct: string
}

interface ResultState {
    finalScore: number
    total: number
    answers: AnswerData[]
    name: string
}
