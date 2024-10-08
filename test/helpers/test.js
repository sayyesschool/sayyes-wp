export function isComplete(questions, answers) {
    const questionsCount = questions.length;
    const answersCount = answers.length;

    return (
        answersCount > 0 &&
        questionsCount > 0 &&
        answersCount === questionsCount
    );
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
    return {
        level: getLevel(questions, answers),
        questions: questions.map((question, index) => ({
            ...question,
            userAnswer: answers[index]
        }))
    };
}

export function submitResults(data) {
    return fetch(window.TEST_SUBMIT_URL, {
        method: 'post',
        headers: {
            'ContentType': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw data;
            });
        }

        window.dispatchEvent(new CustomEvent('test.submit'));
    }).catch(error => {
        window.dispatchEvent(new CustomEvent('test.error', { detail: error }));
    });
}