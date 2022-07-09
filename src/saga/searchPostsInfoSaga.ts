import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchSearchPostsInfoSuccess, fetchSearchPostsInfoFailure } from "../features/searchPost/searchPostSlice";
import { type DataServer } from "../features/getPosts/postsSlice";
import { IOnePost } from "../features/getOnePost/onePostSlice";

export function* fetchSearchPostsInfo(action: PayloadAction<DataServer>) {
    try {

        const requests: Response[] = yield(action.payload.Search.map(post => {
            return (
                fetch(`https://www.omdbapi.com/?i=${post.imdbID}&apikey=8250cbf9`)
            )
        }))

        const data: IOnePost[] = yield(
            Promise.all(requests)
            .then((responses) => Promise.all(responses.map(r => r.json())))
        )
        
        yield put(fetchSearchPostsInfoSuccess(data))
        
    } catch (error: any) {
        yield put(fetchSearchPostsInfoFailure(error))
    }
}

export function* searchPostsInfoSaga() {
    yield takeEvery('searchPosts/fetchSearchPostsSuccess', fetchSearchPostsInfo)
}
