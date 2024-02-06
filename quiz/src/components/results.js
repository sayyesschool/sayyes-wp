var ResultsComponent = {
    name: 'ResultsComponent',

    template: `
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

                <div class="text-center mb-3" v-if="isSent">
                    <p class="lead">Результаты были отправлены на указанный Вами почтовый адрес.</p>

                    <p><small>P.S. Если письма нет во <i>Входящих</i>, проверьте <i>Спам</i>!</small></p>

                    <div><a href="/" class="btn btn-primary">Вернуться на главную</a></div>
                </div>

                <div class="row" v-if="!isSent">
                    <div class="col-md-4 ml-auto mr-auto">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <input class="form-control" type="text" v-model="name" placeholder="Ваше имя" required>
                            </div>

                            <div class="form-group">
                                <input class="form-control" type="email" v-model="email" placeholder="Ваш email" required>
                            </div>
                            
                            <button class="btn btn-primary btn-block">Получить результат</button>
                        </form>
                    </div>
                </div>

                <p class="text-center mt-3"><sup>*</sup>Мы вышлем вам только одно письмо - с результатами теста :)</p>
            </div>
        </section>
    `,

    data() {
        return {
            name: '',
            email: '',
            isSending: false,
            isSent: false
        };
    },

    computed: Vuex.mapGetters([
        'isCompleted',
        'getLevel',
        'getCompletedQuestions'
    ]),

    created: function() {
        if (!this.isCompleted) {
            this.$router.push('/questions');
        }
    },

    methods: {
        handleSubmit: function() {
            var that = this;

            this.isSending = true;

            ym(YANDEX_METRIKA_COUNTER, 'reachGoal', 'test');
            gtag('event', 'click', { event_category: 'test' });

            $.ajax({
                type: 'POST',
                url: SITE_URL + '/online-test.php',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    recipient: RECIPIENT_EMAIL,
                    level: this.getLevel(),
                    questions: this.getCompletedQuestions()
                })
            }).done(function() {
                that.isSent = true;
            }).always(function() {
                that.isSending = false;
            });
        }
    }
};