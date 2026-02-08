export async function FetchQuizQuestion(amount = 10, category = 19, difficulty = 'easy') {
    const res = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    )

    const data = await res.json()

    if (!data.results || data.results.length === 0) {
        throw new Error("No Question returned from API");
    }

    return data.results
}