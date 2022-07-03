import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOnePost } from "../getOnePost/onePostSlice";

export type Posts = Array<{
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}>

interface IPostsState {
    content: null | Posts,
    contentPostsInfo: null | IOnePost[],
    isLoading: 'idle' | 'pending',
    error: null | any,
    errorPostsInfo: null | any
}

const initialState: IPostsState = {
    content: null,
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
        fetchPostsSuccess: (state, action:PayloadAction<Posts>) => {
            if(state.isLoading === 'pending'){
                if(state.content === null) {
                    state.content = action.payload
                }else{
                    state.content = state.content.concat(action.payload)
                }
            }
        },
        fetchPostsInfoSuccess: (state, action: PayloadAction<IOnePost[]>) => {
            if(state.isLoading = 'pending'){
                if(state.contentPostsInfo === null) {
                    state.contentPostsInfo = action.payload
                } else {
                    state.contentPostsInfo = state.contentPostsInfo.concat(action.payload)
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
        }
    },
})

export const {
    fetchPosts, 
    fetchPostsSuccess, 
    fetchPostsFailure,
    fetchPostsInfoSuccess,
    fetchPostsInfoFailure
} = postsSlice.actions

export default postsSlice.reducer