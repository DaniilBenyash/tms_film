import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOnePost } from "../getOnePost/onePostSlice";
import { type Posts, type DataServer } from "../getPosts/postsSlice";

export type RequestForPosts = {
    numberPage: number,
    search: string,
}

interface ISearchPostsState {
    content: null | Posts,
    numberOfPost: null | string,
    contentPostsInfo: null | IOnePost[],
    requestForPosts: null | RequestForPosts,
    isLoading: 'idle' | 'pending',
    isLoadingInfo: 'idle' | 'pending',
    error: null | any,
    errorPostsInfo: null | any
}

const initialState: ISearchPostsState = {
    content: null,
    numberOfPost: null,
    contentPostsInfo: null,
    requestForPosts: null,
    isLoading: 'idle',
    isLoadingInfo: 'idle',
    error: null,
    errorPostsInfo: null,
}

export const searchPostsSlice = createSlice({
    name: 'searchPosts',
    initialState,
    reducers: {
        fetchSearchPosts: (state, action:PayloadAction<RequestForPosts>) => {
            if(state.isLoading === 'idle'){
                state.isLoadingInfo = 'idle'
                state.isLoading = 'pending'
                if(action.payload.numberPage === 1){
                    state.requestForPosts = null
                    state.content = null
                    state.contentPostsInfo = null
                }
                state.requestForPosts = action.payload
            }
        },
        fetchSearchPostsSuccess: (state, action:PayloadAction<DataServer>) => {
            if(state.isLoading === 'pending' || state.isLoadingInfo === 'idle'){
                state.isLoading = 'idle'
                state.isLoadingInfo = 'pending'
                state.error = null
                if(state.content === null) {
                    state.numberOfPost = action.payload.totalResults
                    state.content = action.payload.Search
                }else{
                    state.content = state.content.concat(action.payload.Search)
                }
            }
        },
        fetchSearchPostsInfoSuccess: (state, action: PayloadAction<IOnePost[]>) => {
            if( state.isLoadingInfo === 'pending'){
                state.isLoadingInfo = 'idle'
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
        fetchSearchPostsFailure: (state, action: PayloadAction<any>) => {
            state.isLoadingInfo = 'idle'
            state.isLoading = 'idle'
            state.error = action.payload   
        },
        fetchSearchPostsInfoFailure: (state, action: PayloadAction<any>) => {
            state.isLoadingInfo = 'idle'
            state.isLoading = 'idle'
            state.errorPostsInfo = action.payload
        },
        clearSearchState: (state, action: PayloadAction<null>) => {
            state.content = action.payload
            state.contentPostsInfo = action.payload
        },
    },
})

export const {
    fetchSearchPosts, 
    fetchSearchPostsSuccess, 
    fetchSearchPostsFailure,
    fetchSearchPostsInfoSuccess,
    fetchSearchPostsInfoFailure,
    clearSearchState,
} = searchPostsSlice.actions

export default searchPostsSlice.reducer