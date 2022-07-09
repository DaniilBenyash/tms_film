import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchOnePost } from "./onePostSlice";

export const useOnePost = () => {
    const onePost = useAppSelector( state => state.onePost.content )
    const watchedPost = useAppSelector( state => state.onePost.watchedPost)

    const dispatch = useAppDispatch()

    const getOnePost = (id: string) => {
        dispatch(fetchOnePost(id))
    }
    
    return {
        onePost,
        watchedPost,
        getOnePost,
    }
}