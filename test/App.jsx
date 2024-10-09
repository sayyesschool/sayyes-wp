import Loading from './components/Loading';
import Main from './components/Main';
import Results from './components/Results';
import { useTest } from './hooks/test';

export default function App() {
    const {
        data,
        results,
        isCompleted,
        isLoading,
        setResults
    } = useTest();

    return (
        isLoading ? <Loading /> :
        isCompleted ? <Results results={results} /> :
        <Main
            questions={data}
            onComplete={setResults}
        />
    );
}