import React, { useState } from "react";
import './Select.scss';

type SelectProps = {
    placeholder: string,
    title: string,
}

export const Select = ({placeholder, title}: SelectProps) => {

    const [selectValue, setSelectValue] = useState(placeholder)
    const [selectActive, setSelectActive] = useState(false)

    const valueSelection = (ev: any) => {
        setSelectActive(false)
        setSelectValue(String((ev.target as HTMLLIElement).value))
    }

    return (
        <div className="select">

            <h4 className="select__title">{title}</h4>

            <div className={`select__form ${selectActive && 'select__form_active'} ${selectValue !== placeholder && 'select__form_selected'}`} onClick={() => setSelectActive(!selectActive)}>
                {selectValue}
            </div>
            
            <ol className={`select__table ${selectActive && 'select__table_active'}`} >
                <li className="select__option" value={1} onClick={valueSelection}>qwe</li>
                <li className="select__option" value={2} onClick={valueSelection}>qwe</li>
                <li className="select__option" value={3} onClick={valueSelection}>qwe</li>
            </ol>

            <div className="select__close-select" onClick={() => setSelectActive(false)}></div>
        </div>
       
    )
}