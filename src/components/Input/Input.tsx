import React, { ForwardedRef } from 'react';
import './Input.scss';
import { useTheme } from '../../features/theme';

type InputProps = {
    placeholder: string,
    disabled?: boolean,
    label?: string,
    onChange?: (event: any) => void,
    value?: any,
    error?: string,
    type?: string,
    readOnly?: boolean
}

export const Input = React.forwardRef(({label, placeholder, disabled, onChange, value, error, type, readOnly}: InputProps, ref: ForwardedRef<any>) => {
    
    const { theme } = useTheme()

    return (
        <label className='input'>
            {label 
            && 
            <h3 className={`input__label ${'input__label-' + theme}`}>{label}</h3>
            }
            <input 
                type={type ?? 'input'}
                ref={ref}
                className={`${error && 'input__form_error'} input__form ${'input__form-' + theme}`}
                placeholder={placeholder} 
                disabled={disabled} 
                value={value} 
                onChange={onChange}
                readOnly={readOnly}
            />
            {error 
            && 
            <p className='input__error-text'>{error}</p>}
        </label>
    )
})