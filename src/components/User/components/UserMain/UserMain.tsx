import React from "react";
import './UserMain.scss';
import { Link } from "react-router-dom";
import { useUserInfo } from "../../../../features/userInfo";

export const UserMain = () => {
    const {userInfo, addNotActiveUsers} = useUserInfo()

    const logOut = () => {
        if(userInfo){
            addNotActiveUsers(userInfo)
        }
        
    }
    return (
        <div className="user-main">
            <Link to='/settings' className="user-main__button user-main__button_top">Edit Profile</Link>
            <button className="user-main__button user-main__button_bottom" onClick={logOut}>Log Out</button>
        </div>
    )
}