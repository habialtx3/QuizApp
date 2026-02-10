export default function QuestionSection({ question }) {
    return (
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-600/90 max-w-2xl mx-auto">
                {question}
            </h1>
        </div>
    )
}
