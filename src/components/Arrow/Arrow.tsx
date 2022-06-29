import React from "react";
import './Arrow.scss';

type ArrowProps = {
    disabled: boolean,
    direction: 'left' | 'right',
}

export const Arrow = ({disabled, direction}: ArrowProps) => {
    return (
        <button className={`arrow ${direction === 'left' && 'arrow_left'}`} disabled={disabled}>
        </button>
    )
}