import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { postsReducer } from "../features/getPosts";
import { getPostsSaga } from '../saga/getPostsSaga';
import { getPostsInfoSaga } from "../saga/getPostsInfo";
import { onePostReducer } from "../features/getOnePost";
import { getOnePostSaga } from "../saga/getOnePostSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        onePost: onePostReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(getPostsSaga)
sagaMiddleware.run(getPostsInfoSaga)
sagaMiddleware.run(getOnePostSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch