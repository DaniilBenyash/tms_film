import React from "react";
import './LinkHome.scss';

type LinkHomeProps = {
    disabled: boolean,
}

export const LinkHome = ({disabled}: LinkHomeProps) => {
    return (
        <button className="link-home" disabled={disabled}>
            <p>Home</p>
        </button>
    )
}