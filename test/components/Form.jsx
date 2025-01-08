import { useState } from 'preact/hooks';
import cn from 'classnames';

import Select from './Select';

export default function Form({ onSubmit }) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [goal, setGoal] = useState();
    const [state, setState] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        setState('loading');

        onSubmit({
            name,
            email,
            results
        }).then(() => {
            setState('sent');
        }).catch(() => {
            setState('error');
        });
    }

    const isValid = name && email;
    const isLoading = state === 'loading';

    return (
        <section class="test-results">
            <div class="test-results__text">
                <h2 class="heading-2">Поздравляем! Вы завершили online-тест!</h2>

                <p class="text">Ваш уровень, а также таблицу с Вашими ответами мы вышлем на Вашу почту.</p>
            </div>

            <div class="test-results__form">
                <div class="card card--yellow">
                    <form class="form" onSubmit={handleSubmit}>
                        <p class="text">Заполните, пожалуйста, форму:</p>

                        <div class="flex-column gap-xxs">
                            <input
                                class="input"
                                type="text"
                                name="name"
                                placeholder="Имя*"
                                required
                                onInput={event => setName(event.target.value)}
                            />

                            <input
                                class="input"
                                type="email"
                                name="email"
                                placeholder="Email*"
                                required
                                onInput={event => setEmail(event.target.value)}
                            />

                            <Select
                                label="Цель изучения английского языка"
                                name="goal"
                                value={goal}
                                options={[
                                    'Для путешествий',
                                    'Для учебы',
                                    'Для работы',
                                    'Для себя'
                                ]}
                                onChange={setGoal}
                            />
                        </div>

                        <button class={cn('btn btn--black btn--full', isLoading && 'btn--loading')} disabled={!isValid}>Получить результаты</button>

                        <small class="text text--small">Отправляя данные, вы даете согласие на обработку своих персональных данных на условиях <a class="link link--underlined" href={window.POLICY_URL}>Политики конфиденциальности</a>.</small>
                    </form>
                </div>
            </div>
        </section>
    );
}