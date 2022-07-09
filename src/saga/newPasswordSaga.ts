import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { type TypeSign  } from '../features/userInfo/userInfoSlice';
import { setNotActiveUser, type UserInfo } from '../features/userInfo/userInfoSlice';

export function* fetchNewPassword(action: PayloadAction<TypeSign>) {
    const user = action.payload.user
    const notActiveUsers = action.payload.notActiveUser
    const userState = notActiveUsers.find(us => us.email === user.email)

    if(userState){
        const newPassUser: UserInfo = {
            name: userState?.name,
            email: userState?.email,
            password: user.password,
        }
        yield put(setNotActiveUser(newPassUser))
    }
}

export function* newPasswordSaga() {
    yield takeEvery('newPassword/newPassword', fetchNewPassword)
}