import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchOnePostSuccess, fetchOnePostFailure, IOnePost } from "../features/getOnePost/onePostSlice";

export function* fetchOnePost(action: PayloadAction<string>) {
    try {
        const response: Response = yield fetch(`https://www.omdbapi.com/?i=${action.payload}&apikey=8250cbf9`)

        const data: IOnePost = yield(response.json())
        .then(res => res.Response === 'True' ? res : Promise.reject(res))  
        yield put(fetchOnePostSuccess(data))
    } catch (error: any) {
        yield put(fetchOnePostFailure(error))
    }
}

export function* getOnePostSaga() {
    yield takeEvery('onePost/fetchOnePost', fetchOnePost)
}