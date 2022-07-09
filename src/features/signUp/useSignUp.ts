import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type TypeSign } from "../userInfo/userInfoSlice";
import { signUp } from "./signUpSlice";

export const useSignUp = () => {
    const errorSignUp = useAppSelector(state => state.signUp.error)

    const dispatch = useAppDispatch()

    const fetchSignUp = (user: TypeSign) => {
        dispatch(signUp(user))
    }

    return {
        errorSignUp,
        fetchSignUp,
    }
}