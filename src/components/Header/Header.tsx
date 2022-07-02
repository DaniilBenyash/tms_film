import React from "react";
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import { SearchLine } from "../SearchLine";
import { User } from "../User";

export const Header = () => {
    return (
        <header className="header">
            <div className="header_padding_63">
                <Logo className='header__logo'/>
            </div>
            <SearchLine disabled={false}/>
            <div className="header_padding_40">
                <User  auth={false}/>
            </div>
        </header>
    )
}