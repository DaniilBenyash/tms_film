import React from "react";
import './IconRating.scss';
import { ReactComponent as Trend } from './icons/trend.svg'

type IconRatingProps = {
    rating?: string,
    trend?: boolean,
    className?: string,
}

export const IconRating = ({rating, trend, className}: IconRatingProps) => {
    return (
        <div className={`icon-rating ${trend && 'icon-rating_trend'} ${className}`}>
            {trend && <Trend/>}
            <p className={`icon-rating__value ${trend && 'icon-rating__value_trend'}`}>{rating}</p>
        </div>
    )
}