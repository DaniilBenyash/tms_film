import React, { useEffect, useState } from "react";
import { Posts } from "../../components/Posts";
import { usePosts } from "../../features/getPosts";

export const MainPage = () => {

    const { infoPosts } = usePosts()

    const { posts, fetchMorePosts, numberOfPost, errorPost } = usePosts()
    const [limitPage, setLimitPage] = useState(false)

    const getMorePosts = (): void => {
        if(posts){
            const page = (posts?.length / 10) + 1   
            fetchMorePosts(page)
        }
    }
    useEffect(() => {
        if(posts){
            const maxPage = (Number(numberOfPost) / 10) + 1
            const page = (posts?.length / 10) + 1
            
            if(maxPage === page){
                setLimitPage(true)
            }
            
        }
    }, [posts, numberOfPost])
    
    return (
        <>
            <Posts
                posts={infoPosts}
                error={errorPost}
                onClickMore={getMorePosts}
                limit={limitPage}
                buttonMore={true}
            />
        </>
    )
}