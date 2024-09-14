import { useState } from 'preact/hooks';
import { submitResults } from '../helpers/test';

export default function Results({ results }) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [state, setState] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        setState('sending');

        submitResults(results)
            .then(() => {
                setState('sent');
            })
            .catch(() => {
                setState('error');
            });
    }

    const isSending = state === 'sending';
    const isSent = state === 'sent';

    return (
        <section id="results" class="section">
            <div class="container">
                <div class="text-center mb-3">
                    <h2 class="title page-title">Поздравляем! Вы завершили online-тест!</h2>

                    <p>Ваш уровень, а также таблицу с Вашими ответами мы вышлем на Вашу почту.<sup>*</sup></p>

                    <p>Заполните, пожалуйста, форму ниже.</p>

                    <div class="uil-reload-css" v-if="isSending">
                        <div></div>
                    </div>
                </div>

                {isSent &&
                    <div class="text-center mb-3" v-if="isSent">
                        <p class="lead">Результаты были отправлены на указанный Вами почтовый адрес.</p>

                        <p><small>P.S. Если письма нет во <i>Входящих</i>, проверьте <i>Спам</i>!</small></p>

                        <div><a href="/" class="btn btn-primary">Вернуться на главную</a></div>
                    </div>
                }

                {!isSent &&
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Ваше имя" required />
                        </div>

                        <div class="form-group">
                            <input type="email" name="email" placeholder="Ваш email" required />
                        </div>
                        
                        <button class="btn btn-primary btn-block">Получить результат</button>
                    </form>
                }
            </div>
        </section>
    );
}