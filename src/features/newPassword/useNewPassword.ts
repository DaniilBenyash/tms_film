import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type TypeSign } from "../userInfo/userInfoSlice";
import { newPassword } from "./newPasswordSlice";

export const useNewPassword = () => {
   

    const dispatch = useAppDispatch()

    const fetchNewPassword = (user: TypeSign) => {
        dispatch(newPassword(user))
    }

    return {
        fetchNewPassword,
    }
}