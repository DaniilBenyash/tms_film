import React from "react";
import './ButtonMore.scss';
import { usePosts } from "../../../../features/getPosts";

export const ButtonMore = () => {

    const { posts, fetchMorePosts } = usePosts()

    const getMorePosts = () => {
        if(posts){
            const page = (posts.length / 10) + 1
            fetchMorePosts(page)
        }
    }

    return (
        <button className="button-more" onClick={getMorePosts}>
            Show more
            <div className="button-more__lds-ring"><div></div><div></div><div></div><div></div></div>
        </button>
    )
}