import { useCallback, useEffect, useState } from 'preact/hooks';

import { emitEvent } from '../helpers/event';
import { getUTM } from '../helpers/utm';

export function useTest() {
    const [questions, setQuestions] = useState();
    const [answers, setAnswers] = useState();

    useEffect(() => {
        fetch(window.TEST_DATA_RUL)
            .then(response => response.json())
            .then(data => setQuestions(data.data.questions));
    }, []);

    const submitResults = useCallback(data => {
        const results = questions.map((question, index) => ({
            ...question,
            userAnswer: answers[index]
        }));
        const utm = getUTM();

        return fetch(window.TEST_SUBMIT_URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                ...data,
                results,
                utm
            })
        }).then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw data;
                });
            }
        }).catch(error => {
            emitEvent('test.error', error);
        });
    }, [questions, answers]);

    const isLoading = !questions;
    const isCompleted = answers && answers.length === questions.length;

    return {
        questions,
        isLoading,
        isCompleted,
        setAnswers,
        submitResults
    };
}