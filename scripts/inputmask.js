import Inputmask from 'inputmask';



document.querySelectorAll('input[type=tel]')
    .forEach(element => Inputmask('+7 (999) 999-9999').mask(element));