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
        const utm = getUTM();

        return fetch(window.TEST_SUBMIT_URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                ...data,
                answers,
                utm
            })
        }).then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw data;
                });
            }

            return response.json();
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.error);
            }

            return response.data;
        }).catch(error => {
            emitEvent('test.error', error);
        });
    }, [answers]);

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