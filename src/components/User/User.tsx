import React, { useState } from "react";
import './User.scss';
import { UserMain } from './components/UserMain';
import { ReactComponent as UserIcon} from './icon/user.svg'

type UserProps = {
    auth: boolean,
    name?: string,
}

export const User = ({auth, name}: UserProps) => {

    const [viewMenu, setViewMenu] = useState(false)

    const menuUser = (auth: boolean): void => {
        if(auth){
            setViewMenu(!viewMenu)
        } else {
            console.log('Не зарегистрирован');
        }
    } 

    return (
        <button 
        className={`user ${viewMenu ? 'user__arrow_active' : ((name && auth) ? 'user__arrow_def' : 'user__arrow_not-auth')}`} 
        onClick={() => menuUser(auth)}
        >
            <div className='user__icon'>
                {(name && auth) 
                ?
                <p className="user__initials">{name[0]}</p>
                :
                <UserIcon/>}
            </div>
            <p className="user__name">
                {(name && auth)
                ? 
                name 
                : 
                'Sign In'}
            </p> 
            {viewMenu 
            &&
            <UserMain/>}
        </button>
    )
}