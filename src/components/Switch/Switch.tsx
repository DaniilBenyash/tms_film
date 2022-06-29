import React, { useState } from "react";
import './Switch.scss'

type SwitchProps = {
    disabled: boolean
}

export const Switch = ({disabled}: SwitchProps) => {

    const [positionSwitch, setPositionSwitch] = useState(false)

    return (
        <button 
            className={`switch ${positionSwitch ? 'switch_on' : 'switch_off'}`} 
            disabled={disabled} 
            onClick={() => {setPositionSwitch(!positionSwitch)}}
        >
            <button 
                className={`switch__toggle ${positionSwitch ? 'switch__toggle_on' : 'switch__toggle_off'}`} 
                disabled={disabled}
            >
            </button>
        </button>
    )
}