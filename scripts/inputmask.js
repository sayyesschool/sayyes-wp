import intlTelInput from 'intl-tel-input/intlTelInputWithUtils';
import ru from 'intl-tel-input/i18n/ru';


document.querySelectorAll('input[type=tel]')
    .forEach(input => intlTelInput(input, {
        autoPlaceholder: 'aggressive',
        initialCountry: 'ru',
        i18n: ru,
        formatAsYouType: true,
        strictMode: true,
        hiddenInput: telInputName => ({
            phone: 'phone',
            country: 'country'
        }),
        customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) =>
            selectedCountryPlaceholder + '*',
    }));