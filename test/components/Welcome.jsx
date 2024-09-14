export default function Welcome({ onStart }) {
    return (
        <section class="section section--centered">
            <div class="section__container">
                <header class="section__header">
                    <h1 class="section__title"><span class="company-name">Say Yes!</span> Online Test</h1>

                    <p class="section__description">Предлагаем Вам пройти этот короткий онлайн-тест, чтобы оценить Ваш уровень знаний английского языка.</p>
                </header>

                <div class="section__content">
                    <div class="flex flex-column gap-l">
                        <div class="grid grid-2-1-2">
                            <div class="text-card card card--yellow">
                                <p class="text">Тест состоит из 20 вопросов.</p>
                            </div>
                            
                            <div class="text-card card card--yellow">
                                <p class="text">Ограничения по времени нет.</p>
                            </div>
                            
                            <div class="text-card card card--yellow">
                                <p class="text">На каждый вопрос есть только один правильный ответ.</p>
                            </div>
                            
                            <div class="text-card card card--yellow">
                                <p class="text">Если вы не знаете правильного ответа, выбирайте ответ <i>Не знаю</i>.</p>
                            </div>
                            
                            <div class="text-card card card--yellow">
                                <p class="text">В конце теста Вы сможете узнать правильные ответы.</p>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary m-auto" onClick={onStart}>Начать тест</button>
                    </div>
                </div>
            </div>
        </section>
    );
}