import { useEffect, useState } from 'preact/hooks';

import Question from './Question';
import { isComplete, getProgress, getResults } from '../helpers/test'

export default function Test({ questions, onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (isComplete(questions, answers)) {
            onComplete(getResults(questions, answers));
        }
    }, [questions, answers, onComplete]);

    const handleAnswer = answer => {
        setAnswers(answers => {
            answers[currentIndex] = answer;
            return [...answers];
        });
    };

    const handleNext = () => {
        setCurrentIndex(i => i + 1);
    };

    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentIndex];
    const totalNumberOfQuestions = questions.length;
    const answeredNumberOfQuestions = answers.length;
    const progress = getProgress(questions, answers);

    return (
        <section class="section section-gray" v-if="currentQuestion">
            <div class="container">
                <div class="card">
                    <header class="card-header">
                        <div class="progress">
                            <span
                                class="progress-bar progress-bar-primary"
                                style={{width: progress + '%'}}
                            />
                        </div>
                    </header>
                    
                    {currentQuestion &&
                        <Question
                            question={currentQuestion}
                            answer={currentAnswer}
                            onAnswer={handleAnswer}
                        />
                    }

                    <footer class="card-footer">
                        <button
                            class="btn btn-primary"
                            onClick={handleNext}
                            disabled={!currentAnswer}
                        >
                            Далее
                        </button>

                        <div class="question-number">
                            <span class="badge badge-primary">{answeredNumberOfQuestions + 1} / {totalNumberOfQuestions}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
}