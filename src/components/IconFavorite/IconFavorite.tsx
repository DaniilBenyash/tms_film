import React from "react";
import './IconFavorite.scss';
import { ReactComponent as Favorite } from './icons/favorite.svg'

export const IconFavorite = () => {
    return (
        <div className="icon-favorite">
            <Favorite/>
        </div>
    )
}