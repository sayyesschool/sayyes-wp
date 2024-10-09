import { h, render } from 'preact';

import App from './App';

const startButton = document.querySelector('.test-start-button');
const root = document.querySelector('#app');

startButton.addEventListener('click', () => {
    render(<App />, root);
});