import React from "react";
import './IconFavorite.scss';
import { ReactComponent as Favorite } from './icons/favorite.svg'

type IconFavoriteProps = {
    className?: string,
}

export const IconFavorite = ({className}: IconFavoriteProps) => {
    return (
        <div className={`icon-favorite ${className}`}>
            <Favorite/>
        </div>
    )
}