import React from "react";
import './Posts.scss';
import { IOnePost } from '../../features/getOnePost/onePostSlice';
import { ButtonMore } from '../ButtonMore';
import { Card } from '../Card';
import { useTheme } from '../../features/theme'

type PostsProps = {
    posts: IOnePost[] | null
    error?: string,
    buttonMore: boolean,
    onClickMore?: () => void,
    limit?: boolean,
}

export const Posts = ({posts, error, onClickMore, limit, buttonMore}: PostsProps) => {

    const { theme } = useTheme()
    return (
        <div className={`posts posts-${theme}`}>
        {!posts || posts.length === 0
        ?
        <div className="posts__section">
            <h1 className="posts__error">{error}</h1>
        </div>
        :
        <div className="posts__section">
            <div className="posts__cards">
                {posts?.map((post, index) => {
                    return(
                        <Card
                            key={index}
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
            {buttonMore
            &&
            <div className="posts__footer">
                <ButtonMore limit={limit} onClick={onClickMore}/>
            </div>
            }
        </div>
        }
    </div>
    )
}