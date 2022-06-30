import React, { useEffect } from "react";
import { useState } from "react";
import './Card.scss';
import { IconRating } from '../IconRating';
import { IconFavorite } from '../IconFavorite';
import { Genre } from '../Genre'

type CardProps = {
    title: string,
    imdbID: string,
    poster: string,
    favorite: boolean,
    trend: boolean,
}

export const Card = ({title, imdbID, poster, favorite, trend}: CardProps) => {

    const [rating, setRating] = useState('7,1')
    const [genre, setGengre] = useState<string>("Action, Adventure, Sci-Fi")
    const [q,qq] = useState<string[]>(genre.split(','))


    return (
        <div className="card">
            <div className="card__poster">
                <img className="card__image" src={poster} alt="poster"/>
                <IconRating trend={trend} rating={rating}/>
                {favorite && <IconFavorite/>}
            </div>
            <h4 className="card__title">{title}</h4>
            <Genre genre={q}/>
        </div>
    )
}