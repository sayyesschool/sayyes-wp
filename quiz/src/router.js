var router = new VueRouter({
    base: '/sayes/online-test/',

    routes: [
        {
            path: '/',
            component: WelcomeComponent
        },
        {
            path: '/questions',
            component: QuizComponent
        },
        {
            path: '/results',
            component: ResultsComponent
        }
    ]
});

Vue.use(VueRouter);