import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOnePost } from "../getOnePost/onePostSlice";

export type TypeSign = {
    user: UserInfo,
    notActiveUser: UserInfo[],
}

export type UserInfo = {
    email: string,
    name: string,
    password: string,
    favoritePost?: IOnePost[],
}

type TypeUserInfo = {
    activeUser: null | UserInfo,
    notActiveUser: UserInfo[],
}

const initialState: TypeUserInfo = {
    activeUser: null,
    notActiveUser: [],
}

export const userInfoSlice = createSlice({
    name: 'useInfo',
    initialState,
    reducers: {
        setActiveUser: (state, action: PayloadAction<UserInfo>) => {
            console.log(action.payload);
            
            state.activeUser = action.payload
        },
        setNotActiveUser: (state, action: PayloadAction<UserInfo>) => {
            console.log(action.payload);
            
            state.notActiveUser = [action.payload, ...state.notActiveUser]
            state.activeUser = null
        },
    }
})

export const {
    setActiveUser,
    setNotActiveUser,
} = userInfoSlice.actions

export default userInfoSlice.reducer