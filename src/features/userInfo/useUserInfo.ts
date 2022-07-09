import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UserInfo, setActiveUser, setNotActiveUser } from "./userInfoSlice";

export const useUserInfo = () => {
    const userInfo = useAppSelector(state => state.userInfo.activeUser)
    const notActiveUsers = useAppSelector(state => state.userInfo.notActiveUser)

    const dispatch = useAppDispatch()

    const addActiveUser = (user: UserInfo) => {
        dispatch(setActiveUser(user))
    }

    const addNotActiveUsers = (user: UserInfo) => {
        dispatch(setNotActiveUser(user))
    }
    return {
        userInfo,
        notActiveUsers,
        addActiveUser,
        addNotActiveUsers
    }
}