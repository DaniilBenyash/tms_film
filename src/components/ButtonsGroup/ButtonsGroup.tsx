import React from "react";
import './ButtonsGroup.scss';

type ButtonsGroupProps = {
    disabled: boolean,
}

export const ButtonsGroup = ({disabled}: ButtonsGroupProps) => {
    return(
        <div className="buttons-group">
            <button className="buttons-group__button buttons-group__button_left" disabled={disabled}></button>
            <button className="buttons-group__button buttons-group__button_right" disabled={disabled}></button>
        </div>
    )
}