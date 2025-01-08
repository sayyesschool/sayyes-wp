import { useEffect, useRef } from 'preact/hooks';

import Radio from './Radio';

export default function Item({ question, answer, onAnswer }) {
    const contentRef = useRef();

    const handleClick = (event) => {
        onAnswer(event.target.value);
    };

    useEffect(() => {
        const blankElement = contentRef.current.querySelector('.blank');

        if (!blankElement) return;
        
        if (answer !== 'Не знаю') {
            blankElement.textContent = answer;
        } else {
            blankElement.textContent = '';
        }
    }, [answer])

    return (
        <section class="test-item">
            <div ref={contentRef} class="test-item__question content" dangerouslySetInnerHTML={{__html: question.content}} />
            
            <div class="test-item__answers">
                <div class="radio-group radio-group--column">
                    <div className="radio-group__items">
                        {question.options.map(option =>
                            <Radio
                                name="option"
                                value={option.content}
                                label={option.content}
                                checked={option.content === answer}
                                onClick={handleClick}
                            />
                        )}

                        <Radio
                            name="option"
                            value="Не знаю"
                            label="Не знаю"
                            checked={answer === 'Не знаю'}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}