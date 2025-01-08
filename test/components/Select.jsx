import { useState } from 'preact/hooks';
import cn from 'classnames';

export default function Select({
    label,
    name,
    defaultValue,
    options,
    disabled,
    required,
    onChange,
    ...props
}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleButtonClick = event => {
        event.preventDefault();

        setOpen(!open);
    };

    const handleOptionClick = event => {
        event.preventDefault();

        const value = event.target.dataset.value ?? event.target.textContent;

        setValue(value);
        setOpen(false);
        onChange(value, { target: { name, value } });
    };

    return (
        <div className={cn('select', {
            'select--active': open,
            'select--disabled': disabled,
            'select--required': required
        })}>
            <input
                className="select__input"
                type="hidden"
                name={name}
                value={value}
                {...props}
            />
            
            {label &&
                <label className="select__label">{label}</label>
            }

            <button className="select__button" type="button" onClick={handleButtonClick}>
                <span className="select__value">{value}</span>

                <span className="select__arrow">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.28442L5.56875 1.71567L10.1375 6.28442" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>

            <ul className="select__list">
                {options.map(option =>
                    <li
                        className="select__option"
                        data-value={option.value}
                        onClick={handleOptionClick}
                    >
                        {option.content ?? option}
                    </li>
                )}
            </ul>
        </div>
    );   
}