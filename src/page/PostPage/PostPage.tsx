import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.scss';
import { useOnePost } from "../../features/getOnePost";
import { Genre } from "../../components/Genre";
import { ButtonsGroup } from "../../components/ButtonsGroup";
import { Card } from "../../components/Card";
import { IconRating } from "../../components/IconRating";
import { useUserInfo } from "../../features/userInfo";
import { type UserInfo } from "../../features/userInfo/userInfoSlice";
import { IOnePost } from "../../features/getOnePost/onePostSlice";
import { useTheme } from '../../features/theme';
import { IconFavorite } from "../../components/IconFavorite";

export const PostPage = () => {
    const { theme } = useTheme()
    const { onePost, watchedPost, getOnePost } = useOnePost()

    const { id } = useParams();
    const {userInfo, addActiveUser} = useUserInfo()
    const [favorite, setFavorite] = useState(false)
    useEffect(() => {
        if(id && id !== onePost?.imdbID){
            getOnePost(id)       
        } 
    }, [id, onePost, getOnePost])

    const createFavoritePost = (posts: IOnePost[]) => {
        if(onePost && userInfo){
            const newUser: UserInfo = {
                ...userInfo,
                favoritePost: posts
            }
            addActiveUser(newUser)
        }
    }
    
    const addFavoritePost = () => {
        if(onePost && userInfo){
            if(userInfo.favoritePost){
                createFavoritePost([onePost, ...userInfo.favoritePost])
                if(userInfo.favoritePost.some(post => post.imdbID === onePost.imdbID)){
                    createFavoritePost(userInfo.favoritePost.filter(post => post.imdbID !== onePost.imdbID))
                }
            }else{
                createFavoritePost([ onePost ])
            }
        }       
    }

    useEffect(() => {
        if(onePost && userInfo){
            console.log(1);
            if(userInfo.favoritePost?.some(post => post.imdbID === onePost.imdbID)){
                setFavorite(true)
            }else{
                setFavorite(false)
            }
        }  
    }, [onePost, userInfo])
    return (
        <>
            {!onePost 
            ?
            <h1>Loading content...</h1>
            :
            <div className="post-page">
                <div className="post-page__image-section">
                    <img src={onePost?.Poster} alt="poster" className="post-page__poster"/>
                    <ButtonsGroup disabled={false} onClickLeft={addFavoritePost}/>
                </div>
                <div className="post-page__info-section">
                    <Genre genre={onePost?.Genre.split(',')}/>
                    <h1 className={`post-page__title post-page__title-${theme}`}>{onePost?.Title}</h1>
                    <div className="post-page__rating">
                        <IconRating 
                            rating={onePost?.imdbRating}
                            trend={onePost.Trend}
                            className='icon-rating_position_none'
                        />
                        <div className={`post-page__runtime post-page__icon-rating post-page__icon-rating-${theme}`}>{onePost?.Runtime}</div>
                        {favorite
                        &&
                        <IconFavorite className='icon-favorite_position_none'/>}
                    </div>
                    <p className={`post-page__text post-page__text-${theme}`}>{onePost?.Plot}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="post-page__feature post-page__text">Year</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Year}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Released</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Released}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">BoxOffice</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.BoxOffice}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Country</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Country}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Production</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Production}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Actors</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Actors}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Director</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Director}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Writers</td>
                                <td className={`post-page__text post-page__text-${theme}`}>{onePost?.Writer}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="post-page__watched">
                        <h2 className={`post-page__watched-title post-page__watched-title-${theme}`}>You watched</h2>
                    </div>
                    <div className="post-page__watched-post">
                        {watchedPost?.map(post => {
                            return(
                                <Card
                                    key={post.imdbID}
                                    title={post.Title}
                                    imdbID={post.imdbID}
                                    poster={post.Poster}
                                    rating={post.imdbRating}
                                    genre={post.Genre}
                                    favorite={post.Favorite} 
                                    trend={post.Trend} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}