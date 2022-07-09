import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTheme } from "./themeSlice";

export const useTheme = ( ) => {
    const theme = useAppSelector(state => state.theme.theme)

    const dispatch = useAppDispatch()

    const chengeTheme = (value: 'dark' | 'light') => {
        dispatch(setTheme(value))
    }

    return {
        theme,
        chengeTheme
    }
}