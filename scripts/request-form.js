const GRECAPTCHA = '6LenTzMiAAAAABvM_nwArCX5rtvJQ3TUQS8EsN1q';

class RequestForm {
    constructor({ element, recaptchaUrl, submitUrl } = {}) {
        this.element = element;
        this.recaptchaUrl = recaptchaUrl;
        this.submitUrl = submitUrl;
        this.submitButton = element.querySelector('button[type="submit"]');

        this.element.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(this.element);
        const data = Array.from(formData.entries()).reduce((data, [key, value]) => {
            data[key] = value;
            return data;
        }, {});

        console.log('DATA', data);

        // this.validateRecaptcha()
        //     .then(recaptcha => {
        //         fbq('track', 'Lead');

        //         crm.addStudyRequest({
        //             name: data.name,
        //             phone: data.phone,
        //             email: data.email
        //         });

        //         fetch({
        //             type: 'POST',
        //             url: this.submitUrl, // '/request.php',
        //             headers: {
        //                 'Content-Type': 'application/json; charset=utf-8',
        //             },
        //             data: JSON.stringify({
        //                 name: data.name,
        //                 phone: data.phone,
        //                 email: data.email,
        //                 recaptcha
        //             })
        //         }).then(response => {
        //             console.log(response);
        //             this.sent = true;
        //         }).catch(error => {
        //             console.log(error);
        //             this.error = true;
        //         }).finally(() => {
        //             this.loading = false;
        //             this.element.reset();
        //         });
        //     });
    }

    validateRecaptcha() {
        grecaptcha.ready(() => {
            grecaptcha.execute(GRECAPTCHA, { action: 'submit' })
                .then(token => {
                    fetch({
                        type: 'POST',
                        url: this.recaptchaUrl, // '/recaptcha.php'
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                        },
                        data: JSON.stringify({
                            action: 'submit',
                            token
                        })
                    })
                        .then(res => res.json())
                        .then(response => {
                            if (!response.success || response.score < 0.5)
                                throw 'Bad request';

                            return response;
                        });
                });
        });
    }
}

document.querySelectorAll('.request-form').forEach(element => {
    new RequestForm({ element });
});