import React from "react";
import './ButtonMore.scss';

export const ButtonMore = () => {
    return (
        <button className="button-more">
            Show more
            <div className="button-more__lds-ring"><div></div><div></div><div></div><div></div></div>
        </button>
    )
}