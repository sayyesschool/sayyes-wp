export default function Loading({ size = 'md' }) {
    return (
        <div class="test-loading">
            <div class={`spinner spinner--${size}`} />
        </div>
    );
}