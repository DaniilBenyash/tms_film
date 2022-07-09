import React, { useEffect, useState } from "react";
import './ButtonsGroup.scss';
import { IOnePost } from '../../features/getOnePost/onePostSlice'

type ButtonsGroupProps = {
    disabled: boolean,
    post: IOnePost | null
}

export const ButtonsGroup = ({disabled, post}: ButtonsGroupProps) => {
    const [stateButton, setStateButton] = useState(true)

    const addFavoritePost = () => {
        const infoUserStorage = localStorage.getItem('active')
        if(infoUserStorage !== null){
            const infoUser = JSON.parse(infoUserStorage);

            infoUser.favorite.unshift(post);
        }
    }
    useEffect(( ) => {
        if(localStorage.getItem('active')){
            setStateButton(false)
        }else{
            let obje = {
                name: 'Daniil',
                password: 'qwer',
                favorite: [],
            }
            localStorage.setItem('active', JSON.stringify(obje))
        }
    })
    return(
        <div className="buttons-group">
            <button className="buttons-group__button buttons-group__button_left" disabled={stateButton} onClick={addFavoritePost}></button>
            <button className="buttons-group__button buttons-group__button_right" disabled={disabled}></button>
        </div>
    )
}