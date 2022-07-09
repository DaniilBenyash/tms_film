import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";
import { IconRating } from '../IconRating';
import { IconFavorite } from '../IconFavorite';
import { Genre } from '../Genre';


type CardProps = {
    title: string,
    imdbID: string,
    poster: string,
    genre: string,
    rating: string,
    favorite?: boolean,
    trend?: boolean
}

export const Card = ({title, imdbID, poster, favorite, trend, genre, rating}: CardProps) => {
    return (
        <div className="card">
            <div className="card__poster">
                <Link to={`/post/${imdbID}`}>
                    <img className="card__image" src={poster} alt="poster"/>
                </Link>
                <IconRating trend={trend} rating={rating}/>
                {favorite && <IconFavorite/>}
            </div>
            <div >
                <Link to={`/post/${imdbID}`} className='card__title'>
                    {title}
                </Link>
                <Genre genre={genre.split(',').slice(0,3)}/>
            </div>
        </div>
    )
}