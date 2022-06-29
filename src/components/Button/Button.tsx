import React from "react";
import './Button.scss';

type ButtonProps = {
    text: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className: string,
    disabled?: boolean,
}

export const Button = ({text, onClick, className, disabled}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} button`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}