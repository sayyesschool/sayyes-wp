import { useCallback } from 'preact/hooks';

import Loading from './components/Loading';
import Form from './components/Form';
import Main from './components/Main';
import { useTest } from './hooks/test';

export default function App({ onEnd, onSubmit }) {
    const {
        questions,
        isCompleted,
        isLoading,
        setAnswers,
        submitResults
    } = useTest();

    const handleEnd = useCallback(answers => {
        setAnswers(answers);
        onEnd?.();
    }, [onEnd]);

    const handleSubmit = useCallback(data => {
        return submitResults(data).then(() => onSubmit?.());
    }, [submitResults, onSubmit]);

    return isLoading 
        ? <Loading />
        : !isCompleted
            ? <Main questions={questions} onEnd={handleEnd} />
            : <Form onSubmit={handleSubmit} />;
}