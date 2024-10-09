import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

import cn from 'classnames';
import intlTelInput from 'intl-tel-input/intlTelInputWithUtils';
import ru from 'intl-tel-input/i18n/ru';

export default function PhoneInput({ onInput, onNumberChange, ...props }) {
    const inputRef = useRef();
    const itiRef = useRef();

    const [isInvalid, setInvalid] = useState(false);
    
    useEffect(() => {
        itiRef.current = intlTelInput(inputRef.current, {
            autoPlaceholder: 'aggressive',
            initialCountry: 'ru',
            i18n: ru,
            formatAsYouType: true,
            strictMode: true,
            separateDialCode: true,
            customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) =>
                selectedCountryPlaceholder + '*',
        })
    }, []);

    const handleInput = useCallback(event => {
        onInput?.(event);

        const isValidNumber = itiRef.current.isValidNumber();

        setInvalid(!isValidNumber);

        if (isValidNumber) {
            onNumberChange?.(itiRef.current.getNumber());
        } else {
            onNumberChange?.('');
        }
    }, [onInput]);

    return (
        <input
            ref={inputRef}
            class={cn('input', isInvalid && 'input--invalid')}
            type="tel"
            onInput={handleInput}
            {...props}
        />
    );
}