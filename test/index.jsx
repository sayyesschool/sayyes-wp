import { h, render } from 'preact';

import App from './App';
import { emitEvent } from './helpers/event';

const startButton = document.querySelector('.test-start-button');
const root = document.querySelector('#app');

emitEvent('test.open');

startButton.addEventListener('click', () => {
    emitEvent('test.start');
    render(
        <App
            onEnd={() => emitEvent('test.end')}
            onSubmit={() => emitEvent('test.submit')}
        />,
        root
    );
});