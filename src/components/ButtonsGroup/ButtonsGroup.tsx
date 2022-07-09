import React from "react";
import './ButtonsGroup.scss';

type ButtonsGroupProps = {
    disabled: boolean,
    onClickLeft?: (ev: any) => void,
    onClickRight?: (ev: any) => void,
}

export const ButtonsGroup = ({disabled, onClickLeft, onClickRight}: ButtonsGroupProps) => {
    
    return(
        <div className="buttons-group">
            <button className={`buttons-group__button buttons-group__button_left `} disabled={disabled} onClick={onClickLeft}></button>
            <button className="buttons-group__button buttons-group__button_right" disabled={disabled}  onClick={onClickRight}></button>
        </div>
    )
}