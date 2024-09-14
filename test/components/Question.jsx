export default function Question({ question, answer, onAnswer }) {
    const handleChange = (event) => {
        onAnswer(event.target.value);
    };

    return (
        <section class="card-body">
            <div class="card-text" dangerouslySetInnerHTML={{__html: question.content}} />
            
            <div class="list-group list-group-flush">
                {question.options.map(option =>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={option === answer}
                            onChange={handleChange}
                        />

                        {option}
                    </label>
                )}

                <label>
                    <input
                        type="radio"
                        name="option"
                        value="Не знаю"
                        checked={answer === 'Не знаю'}
                        onChange={handleChange}
                    />

                    Не знаю
                </label>
            </div>
        </section>
    );
}