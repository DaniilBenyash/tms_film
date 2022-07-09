import React, { useState } from "react";
import './Switch.scss'

type SwitchProps = {
    disabled: boolean
    onClick: () => void
}

export const Switch = ({disabled, onClick}: SwitchProps) => {

    const [positionSwitch, setPositionSwitch] = useState(false)

    const clickSwitch = () => {
        setPositionSwitch(!positionSwitch)
        onClick()
    }

    return (
        <div 
            className={`switch ${positionSwitch ? 'switch_on' : 'switch_off'} ${disabled && 'switch_on-disabled switch_off-disabled'}`} 
            onClick={clickSwitch}
        >
            <button 
                className={`switch__toggle ${positionSwitch ? 'switch__toggle_on' : 'switch__toggle_off'}`} 
                disabled={disabled}
            >
            </button>
        </div>
    )
}