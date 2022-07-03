import React, { useEffect, useState } from "react";
import './Genre.scss';

type GenreProps = {
    genre: string,
}

export const Genre = ({genre}: GenreProps) => {

    const [infoGenre, setInfoGenre] = useState<string[]>()

    useEffect(() => {
        setInfoGenre(genre.split(','))
    },[])
    return (
        <div className="genre">
            {infoGenre?.map((genre, index, array) => {
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