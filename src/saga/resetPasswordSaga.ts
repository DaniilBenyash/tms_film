import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { type TypeSign  } from '../features/userInfo/userInfoSlice';
import { resetPasswordError, resetPasswordSucces } from '../features/resetPassword';

export function* fetchResetPassword(action: PayloadAction<TypeSign>) {
    try {
        const user = action.payload.user
        const notActiveUsers = action.payload.notActiveUser
        
        if(notActiveUsers.some(us => us.email === user.email)){
            yield put(resetPasswordSucces(user))
        }else{
            throw(new Error('Неверный email!'))
        }

    } catch(error: any) {
        yield put(resetPasswordError(error.message))
    } 
}

export function* resetPasswordSaga() {
    yield takeEvery('resetPassword/resetPassword', fetchResetPassword)
}