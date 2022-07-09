import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    const infoPosts = useAppSelector( state => state.posts.contentPostsInfo)
    const numberOfPost = useAppSelector( state => state.posts.numberOfPost)
    const errorPost = useAppSelector( state => state.posts.error)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!posts){
            dispatch(fetchPosts(1))
        }
    }, [posts, dispatch])

    const fetchMorePosts = (page: number) => {
        dispatch(fetchPosts(page))
    }

    return {
        posts,
        infoPosts,
        numberOfPost,
        errorPost,
        fetchMorePosts,
    }
}