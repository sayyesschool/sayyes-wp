import { useId } from 'preact/hooks';

export default function Radio({ id: _id, label, ...props }) {
    const id = useId();

    return (
        <div className="radio">
            <input
                id={_id || id}
                class="radio__input"
                type="radio"
                {...props}
            />

            {label &&
                <label className="radio__label" for={_id || id}>
                    {label}
                </label>
            }
        </div>
    );
}