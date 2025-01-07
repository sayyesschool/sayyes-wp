export function emitEvent(eventName, detail) {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
}