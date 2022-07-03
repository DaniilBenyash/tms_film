import React, { useEffect, useState } from "react";
import './Card.scss';
import { IconRating } from '../IconRating';
import { IconFavorite } from '../IconFavorite';
import { Genre } from '../Genre';
import { IOnePost } from "../../features/getOnePost/onePostSlice";
import { usePosts } from '../../features/getPosts';


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
                <img className="card__image" src={poster} alt="poster"/>
                <IconRating trend={trend} rating={rating}/>
                {favorite && <IconFavorite/>}
            </div>
            <div>
                <h4 className="card__title">{title}</h4>
                <Genre genre={genre}/>
            </div>
        </div>
    )
}