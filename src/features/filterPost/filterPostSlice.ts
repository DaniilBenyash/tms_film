import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOnePost } from "../getOnePost/onePostSlice";
import { type DataServer } from "../getPosts/postsSlice";

type Filter = {
    sortBy?: 'Rating' | 'Year',
    movieName?: string | null,
    genre?: null | string[],
    yearsFrom?: null | string,
    yearsTo?: null | string,
    ratingFrom?: null | string,
    ratingTo?: null | string,
    type?: null | string,
}

type FilterPostState = {
    filter: null | Filter,
    activeWindow: boolean;
    content: null | DataServer[],
    contentPostsInfo: null | IOnePost[],
    isLoading: 'idle' | 'pending',
    error: null | any,
    errorPostsInfo: null | any
}


const initialState: FilterPostState = {
    filter: null,
    content: null,
    contentPostsInfo: null,
    activeWindow: false,
    isLoading: 'idle',
    error: null,
    errorPostsInfo: null,
}

export const filterPostsSlice = createSlice({
    name: 'filterPost',
    initialState,
    reducers: {
        fetchFilterPosts: (state, action:PayloadAction<string>) => {
            if(state.isLoading === 'idle'){
                state.error = null
                state.content = null
                state.contentPostsInfo = null
                state.isLoading = 'pending'
            }
        },
        fetchFilterPostsSuccess: (state, action:PayloadAction<Array<DataServer>>) => {
            if(state.isLoading === 'pending'){
                state.content = action.payload
            }
        },
        fetchFilterPostsInfoSuccess: (state, action: PayloadAction<IOnePost[]>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                state.contentPostsInfo = action.payload
            }
        },
        fetchFilterPostsFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        fetchFilterPostsInfoFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.errorPostsInfo = action.payload
        },
        setFilter: (state, action: PayloadAction<Filter>) => {
            if(!state.filter){
                state.filter = action.payload
            }else{
                state.filter = {...state.filter, ...action.payload}
            }
        },
        clearFilter: (state, action: PayloadAction<null>) => {
            state.filter = action.payload
        },
        setActiveWindows: (state, action: PayloadAction<boolean>) => {
            state.activeWindow = action.payload
        },
    },
})

export const {
    fetchFilterPosts, 
    fetchFilterPostsSuccess, 
    fetchFilterPostsFailure,
    fetchFilterPostsInfoSuccess,
    fetchFilterPostsInfoFailure,
    setFilter,
    clearFilter,
    setActiveWindows,
} = filterPostsSlice.actions

export default filterPostsSlice.reducer