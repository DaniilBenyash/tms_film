import React, { useEffect } from "react";
import './MainPage.scss';
import { Card } from "../../components/Card";
import { ButtonMore } from "./components/ButtonMore";
import { usePosts } from "../../features/getPosts";

export const MainPage = () => {

    const { infoPosts, fetchMorePosts } = usePosts()
    
    useEffect(() => {
        fetchMorePosts(1)
    }, [null])
    
    return (
        <div className="main-page">
            
            <div className="main-page__cards">
                {infoPosts?.map((post, index) => {
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
            <ButtonMore/>
        </div>
    )
}