var QuizComponent = {
    name: 'QuizComponent',
    template: `
        <section id="quiz" class="section section-gray" v-if="currentQuestion">
            <div class="container">
                <div class="card no-transition">
                    <header class="card-header">
                        <div class="progress">
                            <span class="progress-bar progress-bar-primary" :style="{ width: progress + '%' }"></span>
                        </div>

                        <i class="fa fa-trophy fa-2x"></i>
                    </header>
                    
                    <Question :question="currentQuestion" :answer="currentAnswer" @answer="handleAnswer" />

                    <footer class="card-footer">
                        <button class="btn btn-primary" @click="goToNextQuestion" :disabled="!currentAnswer">Далее <i class="fa fa-chevron-right"></i></button>

                        <div class="question-number">
                            <span class="badge badge-primary">{{ answeredNumberOfQuestions + 1 }} / {{ totalNumberOfQuestions }}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    `,

    components: {
        'Question': QuestionComponent
    },

    computed: Vuex.mapGetters([
        'currentQuestion',
        'currentAnswer',
        'totalNumberOfQuestions',
        'answeredNumberOfQuestions',
        'progress',
        'isCompleted'
    ]),

    created() {
        this.$store.dispatch('getQuestions');
    },

    methods: {
        handleAnswer(answer) {
            this.$store.dispatch('setCurrentAnswer', answer);
        },

        goToNextQuestion() {
            this.$store.dispatch('submitCurrentAnswer');

            if (this.isCompleted) {
                this.$router.push('/results');
            }
        }
    }
};