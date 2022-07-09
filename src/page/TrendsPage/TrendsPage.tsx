import React, { useEffect, useState } from "react";
import './TrendsPage.scss';
import { Card } from "../../components/Card";
import { usePosts } from "../../features/getPosts";
import { IOnePost } from "../../features/getOnePost/onePostSlice";

export const TrendsPage = () => {

    const { infoPosts } = usePosts()
    const [trendsPost, setTrendsPost] = useState<Array<IOnePost>>([]);

    useEffect(() => {
        if(infoPosts){
            setTrendsPost(infoPosts?.filter(post => post.Trend === true))
        }
        
    }, [infoPosts])

    return (
        <div className="trends-page">
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
        </div>
    )
}