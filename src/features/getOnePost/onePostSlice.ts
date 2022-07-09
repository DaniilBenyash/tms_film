import { createSlice, type PayloadAction, current } from "@reduxjs/toolkit";

export interface IOnePost {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        }
    ],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string,
    Favorite?: boolean,
    Trend?: boolean
}


type OnePostState = {
    content: null | IOnePost,
    watchedPost: null | IOnePost[],
    isLoading: 'idle' | 'pending',
    error: null | any,
}

 const initialState: OnePostState = {
     content: null,
     watchedPost: null,
     isLoading: 'idle',
     error: null,
}

export const onePostSlice = createSlice({
    name: 'onePost',
    initialState,
    reducers: {
        fetchOnePost: (state, action: PayloadAction<string>) => {
            if(state.isLoading = 'idle'){
                state.content = null
                state.isLoading = 'pending'
            }
        },
        fetchOnePostSuccess: (state, action: PayloadAction<IOnePost>) => {
            if(state.isLoading = 'pending'){     
                state.isLoading = 'idle'
                state.content = (Number(action.payload.imdbRating) > 8 ? {...action.payload, Trend: true} : action.payload)

                if(!state.watchedPost){
                    state.watchedPost = [action.payload].map(post => Number(post.imdbRating) > 8 ? {...post, Trend: true} : post)
                } else {
                    state.watchedPost = [action.payload, 
                        ...state.watchedPost
                        .filter(post => post.Title != action.payload.Title)
                        .slice(0,3)]
                        .map(post => Number(post.imdbRating) > 8 ? {...post, Trend: true} : post)
                }
            }
        },
        fetchOnePostFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = 'idle'
            state.error = action.payload
        },
    }
})

export const {fetchOnePost, fetchOnePostSuccess, fetchOnePostFailure} = onePostSlice.actions

export default onePostSlice.reducer