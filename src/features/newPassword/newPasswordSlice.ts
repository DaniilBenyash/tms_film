import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type TypeSign } from "../userInfo/userInfoSlice";

const initialState = {}

export const newPasswordSlice = createSlice({
    name: 'newPassword',
    initialState,
    reducers: {
        newPassword: (state, action: PayloadAction<TypeSign>) => {
            
        },
    }
}) 

export const {
    newPassword,
} = newPasswordSlice.actions

export default newPasswordSlice.reducer