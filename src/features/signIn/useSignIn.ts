import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type TypeSign } from "../userInfo/userInfoSlice";
import { signIn } from "./signInSlice";

export const useSignIn = () => {
    const errorSignIn = useAppSelector(state => state.signIn.error)

    const dispatch = useAppDispatch()

    const fetchSignIn = (user: TypeSign) => {
        dispatch(signIn(user))
    }

    return {
        errorSignIn,
        fetchSignIn,
    }
}