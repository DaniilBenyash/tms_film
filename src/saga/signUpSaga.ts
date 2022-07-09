import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { type TypeSign  } from '../features/userInfo/userInfoSlice';
import { signUpError } from '../features/signUp';
import { setActiveUser } from '../features/userInfo';

export function* fetchSignUp(action: PayloadAction<TypeSign>) {
    try {
        const user = action.payload.user
        const notActiveUsers = action.payload.notActiveUser

        if(notActiveUsers.every(us => us.email !== user.email)){
            yield put(setActiveUser(user))
        }else{
            throw(new Error('Такой пользователь существует!'))
        }

    } catch(error: any) {
        yield put(signUpError(error.message))
    } 
}

export function* signUpSaga() {
    yield takeEvery('signUp/signUp', fetchSignUp)
}