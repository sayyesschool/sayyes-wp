var QuestionComponent = {
    name: 'QuestionComponent',

    template: `
        <section class="card-body" v-if="question">
            <div class="card-text" v-html="question.text"></div>
            
            <div class="list-group list-group-flush">
                <label class="list-group-item list-group-item-action" :class="{'active': answer === choice}" v-for="(choice, index) in question.choices" :key="index">
                    <input type="radio" name="choice" :value="choice" @change="onChange" :checked="answer === choice"> {{ choice }}
                </label>
                
                <label class="list-group-item list-group-item-action" :class="{'active': answer === 'Не знаю'}">
                    <input type="radio" name="choice" value="Не знаю" @change="onChange" :checked="answer === 'Не знаю'"> Не знаю
                </label>
            </div>
        </section>
    `,

    props: ['question', 'answer'],

    methods: {
        onChange(event) {
            this.$emit('answer', event.target.value);
        }
    }
};