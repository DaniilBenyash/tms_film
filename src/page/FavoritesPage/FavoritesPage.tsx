import React from "react";
import './FavoritesPage.scss'; 
import { ReactComponent as NoFavorites } from "./icon/no favorites.svg";
import { useUserInfo } from "../../features/userInfo";
import { Posts } from "../../components/Posts";

export const FavoritesPage = () => {

    const { userInfo } = useUserInfo()
    return (
        <>
            {userInfo?.favoritePost
            ?
            <Posts
                posts={userInfo?.favoritePost}
                buttonMore={false}
            /> 
            :
            <div className="favorites-page">
                <NoFavorites/>
                <h3 className="favorites-page__title">No favorite cards</h3>
            </div> 
            }
            
        </>
    )
}