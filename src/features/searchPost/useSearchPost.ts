import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSearchPosts, type RequestForPosts, clearSearchState } from "./searchPostSlice";

export const useSearchPosts = () => {
    const searchPosts = useAppSelector( state => state.searchPost.content)
    const infoSearchPosts = useAppSelector( state => state.searchPost.contentPostsInfo)
    const numberOfSearchPost = useAppSelector( state => state.searchPost.numberOfPost)
    const requestForSearchPosts = useAppSelector( state => state.searchPost.requestForPosts)
    const errorFetchSearchPost = useAppSelector( state => state.searchPost.error)

    const dispatch = useAppDispatch()
   
    const fetchSearch = (request: RequestForPosts) => {
        dispatch(fetchSearchPosts(request))
    }
    const clearSerchPosts = (clear: null) => {
        dispatch(clearSearchState(clear))
    }
    return {
        searchPosts,
        infoSearchPosts,
        numberOfSearchPost,
        requestForSearchPosts,
        fetchSearch,
        errorFetchSearchPost,
        clearSerchPosts,
    }
}