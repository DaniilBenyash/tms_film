import React from "react";
import './ButtonsGroup.scss';
import { useTheme } from '../../features/theme'

type ButtonsGroupProps = {
    disabled: boolean,
    onClickLeft?: (ev: any) => void,
    onClickRight?: (ev: any) => void,
}

export const ButtonsGroup = ({disabled, onClickLeft, onClickRight}: ButtonsGroupProps) => {
    const { theme } = useTheme()
    return(
        <div className="buttons-group">
            <button className={`buttons-group__button buttons-group__button_left buttons-group__button_left-${theme}`} disabled={disabled} onClick={onClickLeft}></button>
            <button className={`buttons-group__button buttons-group__button_right buttons-group__button_right-${theme}`} disabled={disabled}  onClick={onClickRight}></button>
        </div>
    )
}