
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchFilterPosts, setFilter, clearFilter, setActiveWindows } from "./filterPostSlice";
import { IOnePost } from "../getOnePost/onePostSlice";

export const useFilterPost = () => {
    
    const filterPost = useAppSelector( state => state.filterPost.contentPostsInfo)
    const filter = useAppSelector( state => state.filterPost.filter)
    const activeFilter = useAppSelector( state => state.filterPost.activeWindow)
    const errorFilter = useAppSelector( state => state.filterPost.error)

    const dispatch = useAppDispatch()
   
    const getFilterPost = (movieName: string) => {
        dispatch(fetchFilterPosts(movieName))
    }

    const setFilterState = (genre: {}) => {
        dispatch(setFilter(genre))
    }
    const clearFilterState = () => {
        dispatch(clearFilter(null))
    }

    const setWindowsFilter = (bool: boolean) => {
        dispatch(setActiveWindows(bool))
    }
    const filterPostInfo = (): IOnePost[] => {
        let posts: IOnePost[] = [];
        if(filterPost){
            if(filter?.genre){
                posts = filterPost?.filter(post => {
                    return (filter.genre?.every(genre => post.Genre.split(',').includes(genre)))
                })
            }
            if(filter?.yearsFrom){
                posts = posts?.filter(post => Number(post.Released.slice(-4)) > Number(filter?.yearsFrom))
            }
            if(filter?.yearsTo){
                posts = posts?.filter(post => Number(post.Released.slice(-4)) < Number(filter?.yearsTo))
            }
            if(filter?.ratingFrom){
                posts = posts?.filter(post => Number(post.imdbRating.slice(0,1)) > Number(filter?.ratingFrom))
            }
            if(filter?.ratingTo){
                posts = posts?.filter(post => Number(post.imdbRating.slice(0,1)) < Number(filter?.ratingTo))
            }
            if(filter?.type){
                posts = posts?.filter(post => post.Type === filter.type)
            }
        }
        return (posts)
    }

    return {
        filterPost,
        filter,
        getFilterPost,
        setFilterState,
        clearFilterState,
        setWindowsFilter,
        activeFilter,
        filterPostInfo,
        errorFilter,
    }
}