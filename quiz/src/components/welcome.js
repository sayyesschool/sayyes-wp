var WelcomeComponent = {
    name: 'WelcomeComponent',

    template: `
        <section id="welcome" class="section text-center">
            <div class="container">
                <h1 class="title section-title"><span class="company-name">Say Yes!</span> Online Test</h1>

                <p class="description section-description">Предлагаем Вам пройти этот короткий онлайн-тест, чтобы оценить Ваш уровень знаний английского языка.</p>

                <div class="row">
                    <div class="col">
                        <div class="info">
                            <img class="icon" src="${SITE_URL}/static/images/icons/dusk/numbered-list.png">

                            <p class="lead">Тест состоит из 20 вопросов.</p>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="info">
                            <img class="icon" src="${SITE_URL}/static/images/icons/dusk/time-span.png">

                            <p class="lead">Ограничения по времени нет.</p>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="info">
                            <img class="icon" src="${SITE_URL}/static/images/icons/dusk/checkmark.png">

                            <p class="lead">На каждый вопрос есть только один правильный ответ.</p>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="info">
                            <img class="icon" src="${SITE_URL}/static/images/icons/dusk/emoji-puzzled.png">

                            <p class="lead">Если вы не знаете правильного ответа, выбирайте ответ <i>Не знаю</i>.</p>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="info">
                            <img class="icon" src="${SITE_URL}/static/images/icons/dusk/report-card.png">

                            <p class="lead">В конце теста Вы сможете узнать правильные ответы.</p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center">
                    <button class="btn btn-primary" @click="beginQuiz">Начать тест</button>
                </div>
            </div>
        </section>
    `,

    methods: {
        beginQuiz() {
            this.$router.push('/questions');
        }
    }
};