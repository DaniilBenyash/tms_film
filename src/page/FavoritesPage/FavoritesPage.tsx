import React from "react";
import './FavoritesPage.scss'; 
import { ReactComponent as NoFavorites } from "./icon/no favorites.svg";

export const FavoritesPage = () => {
    return (
        <div className="favorites-page">
            {/* <div className="trends-page">
                <div className="trends-page__section">
                    <div className="trends-page__cards">
                        {trendsPost?.map((post, index) => {
                            return(
                                <Card
                                    key={index}
                                    title={post.Title}
                                    imdbID={post.imdbID}
                                    poster={post.Poster}
                                    rating={post.imdbRating}
                                    genre={post.Genre}
                                    favorite={post.Favorite} 
                                    trend={post.Trend} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div> */}
        </div>
    )
}