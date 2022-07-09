import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { postsReducer } from "../features/getPosts";
import { getPostsSaga } from '../saga/getPostsSaga';
import { getPostsInfoSaga } from "../saga/getPostsInfo";
import { onePostReducer } from "../features/getOnePost";
import { getOnePostSaga } from "../saga/getOnePostSaga";
import { searchPostsReducer } from "../features/searchPost";
import { searchPostsSaga } from "../saga/searchPostsSaga";
import { searchPostsInfoSaga } from "../saga/searchPostsInfoSaga";
import { filterPostsReducer } from "../features/filterPost";
import { fetchFilterPostsSaga } from '../saga/getFilterPostSaga';
import { filterPostsInfoSaga } from '../saga/getFilterPostInfoSaga';
import { userInfoReduser } from "../features/userInfo";
import { signUpReducers } from "../features/signUp";
import { signInReducers } from "../features/signIn";
import { signUpSaga } from "../saga/signUpSaga";
import { signInSaga } from "../saga/signInSaga";
import { resetPasswordReducers } from "../features/resetPassword";
import { newPasswordReducers } from "../features/newPassword";
import { resetPasswordSaga } from "../saga/resetPasswordSaga";
import { newPasswordSaga } from "../saga/newPasswordSaga";
import { themeReducers } from '../features/theme'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        onePost: onePostReducer,
        searchPost: searchPostsReducer,
        filterPost: filterPostsReducer,
        userInfo: userInfoReduser,
        signUp: signUpReducers,
        signIn: signInReducers,
        resetPassword: resetPasswordReducers,
        newPassword: newPasswordReducers,
        theme: themeReducers,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(getPostsSaga)
sagaMiddleware.run(getPostsInfoSaga)
sagaMiddleware.run(getOnePostSaga)
sagaMiddleware.run(searchPostsSaga)
sagaMiddleware.run(searchPostsInfoSaga)
sagaMiddleware.run(fetchFilterPostsSaga)
sagaMiddleware.run(filterPostsInfoSaga)
sagaMiddleware.run(signUpSaga)
sagaMiddleware.run(signInSaga)
sagaMiddleware.run(resetPasswordSaga)
sagaMiddleware.run(newPasswordSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch