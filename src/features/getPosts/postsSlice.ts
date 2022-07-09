import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOnePost } from "../getOnePost/onePostSlice";

export type Posts = Array<{
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}>

export type DataServer = {
    Response: string,
    Search: Posts,
    totalResults: string,
    Error?: string,
}
interface IPostsState {
    content: null | Posts,
    numberOfPost: null | string,
    contentPostsInfo: null | IOnePost[],
    isLoading: 'idle' | 'pending',
    error: null | any,
    errorPostsInfo: null | any
}

const initialState: IPostsState = {
    content: null,
    numberOfPost: null,
    contentPostsInfo: null,
    isLoading: 'idle',
    error: null,
    errorPostsInfo: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action:PayloadAction<number>) => {
            if(state.isLoading === 'idle'){
                state.isLoading = 'pending'
            }
        },
        fetchPostsSuccess: (state, action:PayloadAction<DataServer>) => {
            if(state.isLoading === 'pending'){
                if(state.content === null) {
                    state.numberOfPost = action.payload.totalResults
                    state.content = action.payload.Search
                }else{
                    state.content = state.content.concat(action.payload.Search)
                }
            }
        },
        fetchPostsInfoSuccess: (state, action: PayloadAction<IOnePost[]>) => {
            if(state.isLoading === 'pending'){
                state.isLoading = 'idle'
                if(state.contentPostsInfo === null) {
                    state.contentPostsInfo = action.payload
                                            .map(post => Number(post.imdbRating) > 8 ? {...post, Trend: true} : post)
                } else {
                    state.contentPostsInfo = state.contentPostsInfo
                                            .concat(action.payload)
                                            .map(post => Number(post.imdbRating) > 8 ? {...post, Trend: true} : post)
                }
            }
        },
        fetchPostsFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
        fetchPostsInfoFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.errorPostsInfo = action.payload
        },
    },
})

export const {
    fetchPosts, 
    fetchPostsSuccess, 
    fetchPostsFailure,
    fetchPostsInfoSuccess,
    fetchPostsInfoFailure,
} = postsSlice.actions

export default postsSlice.reducer