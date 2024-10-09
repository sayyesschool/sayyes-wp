import { useState } from 'preact/hooks';

import Stepper from './Stepper';
import Item from './Item';
import { isComplete, getResults } from '../helpers/test'

export default function Main({ questions, onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = answer => {
        setAnswers(answers => {
            answers[currentIndex] = answer;
            return [...answers];
        });
    };

    const handleNext = () => {
        setCurrentIndex(i => i + 1);
    };

    const handleComplete = () => {
        onComplete(getResults(questions, answers));
    };

    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentIndex];
    const totalNumberOfQuestions = questions.length;
    const answeredNumberOfQuestions = currentIndex + 1;

    return (
        <article class="test-main">
            <header class="test-main__header">
                <Stepper
                    completedCount={answeredNumberOfQuestions}
                    totalCount={totalNumberOfQuestions}
                />

                <span className="text">Вопрос {answeredNumberOfQuestions}/{totalNumberOfQuestions}</span>
            </header>
            
            <section class="test-main__content">
                {currentQuestion &&
                    <Item
                        question={currentQuestion}
                        answer={currentAnswer}
                        onAnswer={handleAnswer}
                    />
                }
            </section>

            <footer class="test-main__footer">
                {isComplete(questions, answers) ?
                    <button
                        class="btn btn-primary"
                        onClick={handleComplete}
                    >
                        Завершить тест
                    </button>
                    :
                    <button
                        class="btn btn-primary"
                        onClick={handleNext}
                        disabled={!currentAnswer}
                    >
                        Следующий вопрос
                    </button>
                }
            </footer>
        </article>
    );
}