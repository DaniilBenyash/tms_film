import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type themeState = {
    theme: 'dark' | 'light'
}

const initialState: themeState = {
    theme: 'dark'
}

const themeSlice= createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.theme = action.payload
        },
    }
})

export const {
    setTheme
} = themeSlice.actions

export default themeSlice.reducer

