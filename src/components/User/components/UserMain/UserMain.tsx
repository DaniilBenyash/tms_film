import React from "react";
import './UserMain.scss'

export const UserMain = () => {
    return (
        <div className="user-main">
            <button className="user-main__button user-main__button_top">Edit Profile</button>
            <button className="user-main__button user-main__button_bottom">Log Out</button>
        </div>
    )
}