import React, { ForwardedRef } from 'react';
import './Input.scss';

type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string,
    onChange?: (event: any) => void,
    value?: any,
    error?: string,
    type?: string,
}

export const Input = React.forwardRef(({label, placeholder, disabled, onChange, value, error, type}: InputProps, ref: ForwardedRef<any>) => {
    
    return (
        <label className='input'>
            {label}
            <input 
                type={type ?? 'input'}
                ref={ref}
                className={`${error && 'input__form_error'} input__form`}
                placeholder={placeholder} 
                disabled={disabled} 
                value={value} 
                onChange={onChange}
            />
            {error 
            && 
            <p className='input__error-text'>{error}</p>}
        </label>
    )
})