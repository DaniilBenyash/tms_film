import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure, type DataServer } from '../features/getPosts/postsSlice';



export function* fetchPosts(action: PayloadAction<number>) {
    try {
        const response: Response = yield fetch(`https://omdbapi.com/?apikey=8250cbf9&s=spider-man&page=${action.payload}`)
        
        const data: DataServer = yield(response.json())
        .then(res => res.Response === 'True' ? res : Promise.reject(res))  
        yield put(fetchPostsSuccess(data))

    } catch(error: any) {
        yield put(fetchPostsFailure(error.Error))
    }
}

export function* getPostsSaga() {
    yield takeEvery('posts/fetchPosts', fetchPosts)
}