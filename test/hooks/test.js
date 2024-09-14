import { useEffect, useState } from 'preact/hooks';

export function useTest() {
    const [data, setData] = useState();
    const [results, setResults] = useState();
    const [isStarted, setStarted] = useState(false);

    useEffect(() => {
        fetch(window.TEST_DATA_RUL)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const isLoading = !data;
    const isCompleted = !!results;

    return {
        data,
        results,
        isStarted,
        isLoading,
        isCompleted,
        setResults,
        setStarted
    };
}