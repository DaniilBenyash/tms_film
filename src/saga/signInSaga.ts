import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { type TypeSign  } from '../features/userInfo/userInfoSlice';
import { signInError } from '../features/signIn';
import { setActiveUser } from '../features/userInfo'

export function* fetchSignIn(action: PayloadAction<TypeSign>) {
    try {
        let user = action.payload.user
        const notActiveUsers = action.payload.notActiveUser

        if(notActiveUsers.some(us => {return us.email === user.email && us.password === user.password})){

            const use = notActiveUsers.find(us => us.email === user.email)

            if(use){
                yield put(setActiveUser(use))
            }
            
        } else if (notActiveUsers.some(us => us.email !== user.email)) {  
            throw(new Error('Неправильный логин или пароль!'))
        } else { 
            throw(new Error('Такого пользователя не существует!'))
        }
    } catch(error: any) {
        console.log(error.message);
        
        yield put(signInError(error.message))
    }
}

export function* signInSaga() {
    yield takeEvery('signIn/signIn', fetchSignIn)
}