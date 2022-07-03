import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPostsInfoSuccess, fetchPostsInfoFailure, type Posts } from "../features/getPosts/postsSlice";
import { IOnePost } from "../features/getOnePost/onePostSlice";

export function* fetchPostsInfo(action: PayloadAction<Posts>) {
    try {

        const requests: Response[] = yield(action.payload.map(post => {
            return (
                fetch(`https://www.omdbapi.com/?i=${post.imdbID}&apikey=8250cbf9`)
            )
        }))

        const data: IOnePost[] = yield(
            Promise.all(requests)
            .then((responses) => Promise.all(responses.map(r => r.json())))
        )
        console.log(data);
        yield put(fetchPostsInfoSuccess(data))
        
    } catch (error: any) {
        yield put(fetchPostsInfoFailure(error))
    }
}

export function* getPostsInfoSaga() {
    yield takeEvery('posts/fetchPostsSuccess', fetchPostsInfo)
}
