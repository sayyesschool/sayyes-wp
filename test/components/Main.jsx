import { useState } from 'preact/hooks';

import Stepper from './Stepper';
import Item from './Item';

export default function Main({ questions, onEnd }) {
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

    const handleEnd = () => {
        onEnd(answers);
    };

    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentIndex];
    const totalNumberOfQuestions = questions.length;
    const answeredNumberOfQuestions = currentIndex + 1;
    const questionsCount = questions.length;
    const answersCount = answers.length;
    const isComplete = 
        answersCount > 0 &&
        questionsCount > 0 &&
        answersCount === questionsCount;

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
                        onClick={handleEnd}
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