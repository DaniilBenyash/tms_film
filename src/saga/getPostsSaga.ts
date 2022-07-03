import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure, type Posts } from '../features/getPosts/postsSlice';

type dataResponse = {
    Response: string,
    Search: Posts,
    totalResults: string,
}

export function* fetchPosts(action: PayloadAction<number>) {
    try {
        const page = String(action.payload)
        const response: Response = yield fetch(`https://omdbapi.com/?apikey=8250cbf9&s=spider-man&page=${page}`)
        
        const data: dataResponse = yield(response.json())
        
        
        yield put(fetchPostsSuccess(data.Search))

    } catch(error: any) {
        yield put(fetchPostsFailure(error))
    }
}

export function* getPostsSaga() {
    yield takeEvery('posts/fetchPosts', fetchPosts)
}