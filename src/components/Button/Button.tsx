import React from "react";
import './Button.scss';
import { useTheme } from '../../features/theme'

type ButtonProps = {
    text: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className: string,
    disabled?: boolean,
}

export const Button = ({text, onClick, className, disabled}: ButtonProps) => {
    const { theme } = useTheme()
    return (
        <button
            onClick={onClick}
            className={`${className} button  ${className}-${theme}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}