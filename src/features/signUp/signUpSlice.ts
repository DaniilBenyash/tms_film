import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type TypeSign } from "../userInfo/userInfoSlice";

type signUpState = {
    error: null | string
}

const initialState: signUpState = {
    error: null
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<TypeSign>) => {
            state.error = null
        },
        signUpError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
}) 

export const {
    signUp,
    signUpError
} = signUpSlice.actions

export default signUpSlice.reducer