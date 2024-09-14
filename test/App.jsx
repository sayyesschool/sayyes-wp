import Loading from './components/Loading';
import Results from './components/Results';
import Test from './components/Test';
import Welcome from './components/Welcome';
import { useTest } from './hooks/test';

export default function App() {
    const {
        data,
        results,
        isCompleted,
        isLoading,
        isStarted,
        setResults,
        setStarted
    } = useTest();

    return (
        isLoading ? <Loading /> :
        !isStarted ? <Welcome onStart={() => setStarted(true)} /> :
        isCompleted ? <Results results={results} /> :
            <Test
                questions={data}
                onComplete={setResults}
            />
    );
}