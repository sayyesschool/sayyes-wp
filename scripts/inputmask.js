// import Inputmask from 'inputmask';
import intlTelInput from 'intl-tel-input/intlTelInputWithUtils';

// document.querySelectorAll('input[type=tel]')
//     .forEach(element => Inputmask('+7 (999) 999-9999').mask(element));

document.querySelectorAll('input[type=tel]')
    .forEach(input => intlTelInput(input, {
        initialCountry: 'ru'
    }));