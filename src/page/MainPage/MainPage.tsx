import React from "react";
import './MainPage.scss';

import { Card } from "../../components/Card";
import { ButtonMore } from "./components/ButtonMore";

export const MainPage = () => {

    const array = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className="main-page">
            
            <div className="main-page__cards">
                {array.map((card, index) => {
                    return(
                        <Card
                            key={index}
                            title='Spider-Man'
                            imdbID="tt0145487"
                            poster='https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
                            favorite={false} 
                            trend={false} 
                        />
                    )
                })}
                
            </div>
            <ButtonMore/>
        </div>
    )
}