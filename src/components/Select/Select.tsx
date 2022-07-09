import React from "react";
import './Select.scss';

type SelectProps = {
    placeholder: string,
    title: string,
    onChange?: (ev: any) => void,
    options?: string[],
}

export const Select = ({placeholder, title, onChange, options}: SelectProps) => {

    return (
        <div className="select">
            <h4 className="select__title">{title}</h4>
            <select className="select__form" placeholder={placeholder} onChange={onChange} defaultValue={'Select type'}>
                <option  disabled>Select type</option>
                {options?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div> 
    )
}