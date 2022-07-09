import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from 'redux-saga/effects';
import { fetchFilterPostsInfoSuccess, fetchFilterPostsInfoFailure } from "../features/filterPost/filterPostSlice";
import { type DataServer } from "../features/getPosts/postsSlice";
import { IOnePost } from "../features/getOnePost/onePostSlice";

export function* fetchFilterPostsInfo(action: PayloadAction<Array<DataServer>>) {

    try {
        const requests: Response[] = yield(action.payload.map(response => {
            return (
                response.Search.map(post => {
                    return(fetch(`https://www.omdbapi.com/?i=${post.imdbID}&apikey=8250cbf9`))
                    }
                )
            )
        }))

        const data: IOnePost[] = yield(
            Promise.all(requests.flat(1))
            .then((responses) => Promise.all(responses.map(r => r.json())))
        )

        yield put(fetchFilterPostsInfoSuccess(data))
        
    } catch (error: any) {
        yield put(fetchFilterPostsInfoFailure(error))
    }
}

export function* filterPostsInfoSaga() {
    yield takeEvery('filterPost/fetchFilterPostsSuccess', fetchFilterPostsInfo)
}