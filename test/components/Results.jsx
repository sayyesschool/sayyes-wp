import { useState } from 'preact/hooks';
import cn from 'classnames';

import { submitResults } from '../helpers/test';
import PhoneInput from './PhoneInput';

export default function Results({ results = {} }) {
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [state, setState] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        setState('sending');

        submitResults({
            name: '',
            phone,
            email,
            level: results.level,
            questions: results.questions
        }).then(() => {
            setState('sent');
        }).catch(() => {
            setState('error');
        });
    }

    const isValid = phone && email;
    const isSending = state === 'sending';

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
                            <PhoneInput
                                name="phone"
                                placeholder="*"
                                required
                                onNumberChange={setPhone}
                            />

                            <input
                                class="input"
                                type="email"
                                name="email"
                                placeholder="Email*"
                                required
                                onInput={event => setEmail(event.target.value)}
                            />
                        </div>

                        <button class={cn('btn btn--black btn--full', isSending && 'btn--loading')} disabled={!isValid}>Оставить заявку</button>

                        <small class="text text--small">Оставляя заявку, вы принимаете <a class="link link--underlined" href="{{links.agreement}}">Пользовательское соглашение</a> и даете согласие на обработку своих персональных данных на условиях <a class="link link--underlined" href="{{links.policy}}">Политики конфиденциальности</a>.</small>
                    </form>
                </div>
            </div>
        </section>
    );
}