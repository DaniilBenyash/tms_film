import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchFilterPostsSuccess, fetchFilterPostsFailure } from "../features/filterPost/filterPostSlice";
import { type DataServer } from "../features/getPosts/postsSlice";

export function* fetchFilterPosts(action: PayloadAction<string>) {
    try {
        const array = [1,2,3,4,5,6,7,8,9,10];
        
        const requests: Response[] = yield(array.map(page => {
            return (
                fetch(`https://omdbapi.com/?apikey=8250cbf9&s=${action.payload}&page=${page}`)
            )
        }))

        const data: DataServer[] = yield(
            Promise.all(requests)
            .then((responses) => Promise.all(responses.map(r => r.json())))
            .then(res => res.every(post => post.Response === 'True') ? res : Promise.reject(res[0].Error))
        )

        yield put(fetchFilterPostsSuccess(data))
        
    } catch (error: any) {
        yield put(fetchFilterPostsFailure(error))
    }
}

export function* fetchFilterPostsSaga() {
    yield takeEvery('filterPost/fetchFilterPosts', fetchFilterPosts)
}
