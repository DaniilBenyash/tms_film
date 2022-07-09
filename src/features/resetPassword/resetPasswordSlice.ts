import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type TypeSign } from "../userInfo/userInfoSlice";
import { type UserInfo } from "../userInfo/userInfoSlice";

type resetPasswordState = {
    error: null | string
    userReset: null | UserInfo
}

const initialState: resetPasswordState = {
    error: null,
    userReset: null,
}

export const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
        resetPassword: (state, action: PayloadAction<TypeSign>) => {
            state.error = null
        },
        resetPasswordSucces: (state, action: PayloadAction<UserInfo>) => {
            state.userReset = action.payload
        },
        resetPasswordError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
}) 

export const {
    resetPassword,
    resetPasswordSucces,
    resetPasswordError
} = resetPasswordSlice.actions

export default resetPasswordSlice.reducer