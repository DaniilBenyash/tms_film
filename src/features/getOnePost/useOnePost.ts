import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchOnePost } from "./onePostSlice";

export const useOnePost = () => {
    const onePost = useAppSelector( state => state.onePost.content )

    const dispatch = useAppDispatch()

    const getOnePost = (id: string) => {
        dispatch(fetchOnePost(id))
    }

    return {
        onePost,
        getOnePost
    }
}