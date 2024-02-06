const store = new Vuex.Store({
    state: {
        currentAnswer: '',
        questions: [],
        answers: []
    },

    mutations: {
        SET_QUESTIONS(state, payload) {
            state.questions = payload;
        },

        SET_CURRENT_ANSWER(state, payload) {
            state.currentAnswer = payload;
        },

        SUBMIT_CURRENT_ANSWER(state) {
            state.answers.push(state.currentAnswer);
            state.currentAnswer = '';
        }
    },

    actions: {
        getQuestions(context) {
            return fetch(`${window.API_URL}/online-test/app/data/questions.json`)
                .then(response => response.json())
                .then(questions => context.commit('SET_QUESTIONS', questions));
        },

        setCurrentAnswer(context, payload) {
            context.commit('SET_CURRENT_ANSWER', payload);
        },

        submitCurrentAnswer(context) {
            context.commit('SUBMIT_CURRENT_ANSWER');
        }
    },

    getters: {
        currentAnswer: function (state) {
            return state.currentAnswer;
        },

        currentQuestion: function (state) {
            return state.questions[state.answers.length];
        },

        totalNumberOfQuestions: function (state) {
            return state.questions.length;
        },

        answeredNumberOfQuestions: function (state) {
            return state.answers.length;
        },

        progress: function (state, getters) {
            return getters.answeredNumberOfQuestions / getters.totalNumberOfQuestions * 100;
        },

        isCompleted: function (state, getters) {
            return (getters.answeredNumberOfQuestions > 0 && getters.totalNumberOfQuestions > 0) && getters.answeredNumberOfQuestions === getters.totalNumberOfQuestions;
        },

        getCompletedQuestions: function(state) {
            return function() {
                return state.questions.map(function(question, index) {
                    var answer = state.answers[index];
                    
                    question.userAnswer = answer;
    
                    return question;
                });
            };
        },

        getLevel: function (state) {
            return function() {
                var answers = state.answers.reduce(function(answers, answer, index) {
                    var question = state.questions[index];
                    
                    if (question.answer === answer) {
                        answers.correct.push(answer);
                    } else {
                        answers.incorrect.push(answer);
                    }
    
                    return answers;
                }, { correct: [], incorrect: [] });
    
                var correctAnswers = answers.correct.length;
    
                if (correctAnswers < 5) {
                    return 'Beginner';
                } else if (correctAnswers < 10) {
                    return 'Elementary';
                } else if (correctAnswers < 15) {
                    return 'Pre-Intermediate';
                } else if (correctAnswers < 20) {
                    return 'Intermediate';
                } else {
                    return 'Upper-Intermediate';
                }
            };
        }
    }
});