export function answerQuestion(selectedAnswer: any) {
    setSelectedAnswer(selectedAnswer)

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const finalScore = isCorrect ? score + 1 : score
    if (isCorrect) {
        setScore(finalScore)
    }

    setAnswers(prev => [
        ...prev,
        {
            questionId: currentQuestion.id,
            selected: selectedAnswer,
            correct: currentQuestion.correctAnswer
        }
    ])

    if (questionIndex < questions.length - 1) {
        setQuestionIndex(prev => prev + 1)
        setSelectedAnswer(null)
    } else {
        finishQuiz(finalScore)
    }
}