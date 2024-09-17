import Component from './component';

export default class Form extends Component {
    static name = 'form';

    static get classes() {
        return {
            root: this.name
        };
    }

    loading = false;

    constructor(element) {
        super(element);

        this.element.addEventListener('submit', this.handleSubmit.bind(this));
        this.submitButton = this.getElement('button[type="submit"]');
    }

    handleSubmit(event) {
        event.preventDefault();

        setTimeout(() => {
            const isValid = this.element.reportValidity();

            if (!isValid) return;

            const formData = new FormData(this.element);
            const data = Array.from(formData.entries())
                .reduce((data, [key, value]) => {
                    data[key] = value;
                    return data;
                }, {});

            this.setLoading(true);

            getRecaptcha().then(recaptcha => {
                // if (!recaptcha.success || recaptcha.score < window.RECAPTCHA_SCORE)
                //     throw 'ReCAPTCHA test failed';

                fetch(REQUEST_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify({
                        ...data,
                        recaptcha
                    })
                })
                    .then(response => response.json())
                    .then(response => {
                        if (response.ok) {
                            window.dispatchEvent(new CustomEvent(`${this.constructor.name}.sent`));
                        } else if (response.error) {
                            throw response;
                        }
                    }).catch(error => {
                        window.dispatchEvent(new CustomEvent(`${this.constructor.name}.error`, {
                            detail: error
                        }));
                    }).finally(() => {
                        this.setLoading(false);
                        this.element.reset();
                    });
            });
        }, 0);
    }

    setLoading(isLoading = true) {
        this.loading = isLoading;
        this.submitButton.disabled = isLoading;
        this.submitButton.toggleAttribute('data-loading', isLoading);
    }
}

export class CallbackForm extends Form {
    static name = 'callback-form';
}

export class RequestForm extends Form {
    static name = 'request-form';
}

function getRecaptcha() {
    return new Promise((resolve, reject) => {
        grecaptcha.ready(() => {
            return grecaptcha.execute(window.RECAPTCHA_KEY, { action: 'submit' })
                .then(token => fetch(window.RECAPTCHA_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify({
                        action: 'submit',
                        token
                    })
                }))
                .then(res => res.json())
                .then(resolve)
                .catch(reject);
        });
    });
}