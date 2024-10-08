export default class Component {
    events = new Map();

    static init() {
        return Array.from(document.querySelectorAll(`.${this.classes.root}`))
            .map(element => new this(element));
    }

    constructor(element) {
        this.element = typeof element === 'string' ?
            document.querySelector(element) : element;
        this.element.component = this;
    }

    getElement(selector) {
        return this.element.querySelector(selector);
    }

    getElements(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }

    on(event, handler) {
        if (this.events.has(event)) {
            this.events.get(event).add(handler);
        } else {
            this.events.set(event, new Set([handler]));
        }
    }

    once(event, handler) {
        const handleOnce = payload => {
            handler(payload);
            this.off(event, handleOnce);
        };

        this.on(event, handleOnce);
    }

    off(event, handler) {
        if (this.events.has(event)) {
            this.events.get(event).delete(handler);
        }
    }

    emit(event, payload) {
        this.events.get(event)?.forEach(handler => handler(payload));
    }
}