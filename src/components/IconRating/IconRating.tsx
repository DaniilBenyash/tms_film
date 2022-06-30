import React from "react";
import './IconRating.scss';
import { ReactComponent as Trend } from './icons/trend.svg'

type IconRatingProps = {
    rating: string,
    trend?: boolean,
}

export const IconRating = ({rating, trend}: IconRatingProps) => {
    return (
        <div className={`icon-rating ${trend && 'icon-rating_trend'}`}>
            {trend && <Trend/>}
            <p className={`icon-rating__value ${trend && 'icon-rating__value_trend'}`}>{rating}</p>
            
        </div>
    )
}