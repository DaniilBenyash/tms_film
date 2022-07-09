import React, { useEffect, useState } from "react";
import './TrendsPage.scss';
import { usePosts } from "../../features/getPosts";
import { IOnePost } from "../../features/getOnePost/onePostSlice";
import { Posts } from "../../components/Posts";

export const TrendsPage = () => {

    const { infoPosts } = usePosts()
    const [trendsPost, setTrendsPost] = useState<Array<IOnePost>>([]);

    useEffect(() => {
        if(infoPosts){
            setTrendsPost(infoPosts?.filter(post => post.Trend === true))
        }
        
    }, [infoPosts])

    return (
        <>
            <Posts
                posts={trendsPost}
                buttonMore={false}
            />
        </>
    )
}