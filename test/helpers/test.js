export function submitResults(data) {
    window.dispatchEvent(new CustomEvent('test.submit'));

    return fetch(window.TEST_SUBMIT_URL, {
        method: 'post',
        headers: {
            'ContentType': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}

export function isComplete(questions, answers) {
    const questionsCount = questions.length;
    const answersCount = answers.length;

    return (
        answersCount > 0 &&
        questionsCount > 0 &&
        answersCount === questionsCount
    );
}

export function getProgress(questions, answers) {
    return answers.length / questions.length * 100;
}

export function getLevel(questions, answers) {
    const { correct, incorrect } = answers.reduce((answers, answer, index) => {
        const question = questions[index];

        if (question.answer === answer) {
            answers.correct.push(answer);
        } else {
            answers.incorrect.push(answer);
        }

        return answers;
    }, {
        correct: [],
        incorrect: []
    });

    const correctAnswers = correct.length;

    if (correctAnswers < 5) {
        return 'Beginner';
    } else if (correctAnswers < 10) {
        return 'Elementary';
    } else if (correctAnswers < 15) {
        return 'Pre-Intermediate';
    } else if (correctAnswers < 20) {
        return 'Intermediate';
    } else {
        return 'Upper-Intermediate';
    }
}

export function getResults(questions, answers) {
    return questions.map((question, index) => {
        return {
            ...question,
            userAnswer: answers[index]
        };
    });
}