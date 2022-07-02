import React from "react";
import './MenuLinks.scss';

type MenuLinksProps = {
    disabled: boolean,
    name: string,
    active: boolean,
}

export const MenuLinks = ({disabled, name, active}: MenuLinksProps) => {

    const className = 'menu-links_' + name.toLowerCase()
    const classNameActive = 'menu-links_' + name.toLowerCase() + '_active'

    return (
        <button 
            className={`menu-links ${className} ${active && classNameActive}`} 
            disabled={disabled}
        >
            <p>{name}</p>
        </button>
    )
}