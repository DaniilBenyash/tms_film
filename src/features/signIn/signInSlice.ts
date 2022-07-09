import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type TypeSign } from "../userInfo/userInfoSlice";

type signInState = {
    error: null | string
}

const initialState: signInState = {
    error: null
}

export const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<TypeSign>) => {
            state.error = null
        },
        signInError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
}) 

export const {
    signIn,
    signInError
} = signInSlice.actions

export default signInSlice.reducer