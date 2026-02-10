export function formatQuestion(apiResponse: any) {
    return apiResponse.map((q: any, index: number) => {
        const options = [...q.incorrect_answers, q.correct_answer]

        const shuffleOptions = options.sort(() => Math.random() - 0.5)

        return {
            id: index + 1,
            question: decodeHtml(q.question),
            options: shuffleOptions.map((opt) => decodeHtml(opt)),
            correctAnswer: decodeHtml(q.correct_answer)
        }
    })
}

export function decodeHtml(text: any) {
    const txt = document.createElement("textarea")
    txt.innerHTML = text
    return txt.value
}