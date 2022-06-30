import React from "react";
import './Genre.scss';

type GenreProps = {
    genre: string[],
}

export const Genre = ({genre}: GenreProps) => {
    return (
        <div className="genre">
            {genre.map((genre, index, array) => {
                if(index === array.length-1){
                    return (
                        <div key={index} className="genre__value genre__value_last">{genre}</div>
                    )
                }else{
                    return (
                        <div key={index} className="genre__value">
                            {genre}
                            <div className="genre__dot">·</div>
                        </div>
                    )
                }
                
            })}
        </div>
    )
}