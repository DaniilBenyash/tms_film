import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.scss';
import { useOnePost } from "../../features/getOnePost";
import { Genre } from "../../components/Genre";
import { ButtonsGroup } from "../../components/ButtonsGroup";
import { Card } from "../../components/Card";
import { IconRating } from "../../components/IconRating";

export const PostPage = () => {

    const { onePost, watchedPost, getOnePost } = useOnePost()

    const { id } = useParams();

    useEffect(() => {
        if(id){
            getOnePost(id);
        }  
    }, [id])
    return (
        <>
            {!onePost 
            ?
            <h1>Loading content...</h1>
            :
            <div className="post-page">
                <div className="post-page__image-section">
                    <img src={onePost?.Poster} alt="poster" className="post-page__poster"/>
                    <ButtonsGroup disabled={false} post={onePost}/>
                </div>
                <div className="post-page__info-section">
                    <Genre genre={onePost?.Genre.split(',')}/>
                    <h1 className="post-page__title">{onePost?.Title}</h1>
                    <div className="post-page__rating">
                        <IconRating 
                            rating={onePost?.imdbRating}
                            trend={onePost.Trend}
                            className='icon-rating_position_none'
                        />
                        <div className="post-page__runtime post-page__icon-rating">{onePost?.Runtime}</div>
                    </div>
                    <p className="post-page__text">{onePost?.Plot}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="post-page__feature post-page__text">Year</td>
                                <td className="post-page__text">{onePost?.Year}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Released</td>
                                <td className="post-page__text">{onePost?.Released}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">BoxOffice</td>
                                <td className="post-page__text">{onePost?.BoxOffice}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Country</td>
                                <td className="post-page__text">{onePost?.Country}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Production</td>
                                <td className="post-page__text">{onePost?.Production}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Actors</td>
                                <td className="post-page__text">{onePost?.Actors}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Director</td>
                                <td className="post-page__text">{onePost?.Director}</td>
                            </tr>
                            <tr>
                                <td className="post-page__feature post-page__text">Writers</td>
                                <td className="post-page__text">{onePost?.Writer}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="post-page__watched">
                        <h2 className="post-page__watched-title">You watched</h2>
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