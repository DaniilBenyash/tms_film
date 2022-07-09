import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchSearchPostsSuccess, fetchSearchPostsFailure, type RequestForPosts } from '../features/searchPost/searchPostSlice';
import { type DataServer } from '../features/getPosts/postsSlice';



export function* fetchSearchPosts(action: PayloadAction<RequestForPosts>) {
    try {
        const response: Response = yield fetch(`https://omdbapi.com/?apikey=8250cbf9&s=${action.payload.search}&page=${action.payload.numberPage}`)
        
        const data: DataServer = yield(response.json())
        .then(res => res.Response === 'True' ? res : Promise.reject(res))
        
        yield put(fetchSearchPostsSuccess(data))

    } catch(error: any) {
        yield put(fetchSearchPostsFailure(error.Error))
    }
}

export function* searchPostsSaga() {
    yield takeEvery('searchPosts/fetchSearchPosts', fetchSearchPosts)
}