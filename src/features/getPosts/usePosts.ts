import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "./postsSlice";

export const usePosts = () => {
    const posts = useAppSelector( state => state.posts.content)
    const infoPosts = useAppSelector( state => state.posts.contentPostsInfo)

    const dispatch = useAppDispatch()

    const fetchMorePosts = (page: number) => {
        dispatch(fetchPosts(page))
    }
 
    return {
        posts,
        infoPosts,
        fetchMorePosts,
    }
}