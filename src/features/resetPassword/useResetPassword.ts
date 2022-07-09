import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type TypeSign } from "../userInfo/userInfoSlice";
import { resetPassword } from "./resetPasswordSlice";

export const useResetPassword = () => {
    const errorResetPassword = useAppSelector(state => state.resetPassword.error)
    const resetPasswordUser = useAppSelector(state => state.resetPassword.userReset)

    const dispatch = useAppDispatch()

    const fetchResetPassword = (user: TypeSign) => {
        dispatch(resetPassword(user))
    }

    return {
        errorResetPassword,
        fetchResetPassword,
        resetPasswordUser,
    }
}