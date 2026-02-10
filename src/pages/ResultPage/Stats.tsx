import StatItem from './StatItem'

export default function Stats({ total, finalScore, incorrect, answered }: StatsProps) {
    return (
        <>
            <div className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-slate-700 text-xl font-bold">
                        Your Performance
                    </h3>
                    <span className="text-secondary font-black text-2xl">
                        {finalScore / total * 100} %
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <StatItem label="Total Questions" value={total} icon="fact_check" />
                    <StatItem label="Answered" value={answered} icon="edit_square" />
                    <StatItem
                        label="Correct"
                        value={finalScore}
                        icon="check_circle"
                        accent="secondary"
                    />
                    <StatItem
                        label="Incorrect"
                        value={incorrect}
                        icon="cancel"
                        accent="soft-pink"
                    />
                </div>
            </div>
        </>
    )
}

interface StatsProps {
    total: number,
    finalScore: number,
    incorrect: number,
    answered: number
}