import React, { useState } from "react";
import './User.scss';
import { UserMain } from './components/UserMain';
import { ReactComponent as UserIcon} from './icon/user.svg';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../features/userInfo';
import { useTheme } from '../../features/theme';

type UserProps = {
    auth: boolean,
    name?: string,
}

export const User = ({auth, name}: UserProps) => {
    
    const { theme } = useTheme()
    const [viewMenu, setViewMenu] = useState(false)
    const navigate = useNavigate()
    const { userInfo } = useUserInfo()

    const menuUser = (auth: boolean): void => {
        if(userInfo){
            setViewMenu(!viewMenu)
        } else {
            navigate('/sign-in')
        }
    } 

    return (
        <div 
        className={`user ${viewMenu ? 'user__arrow_active' : ((userInfo) ? 'user__arrow_def' : 'user__arrow_not-auth')}`} 
        onClick={() => menuUser(auth)}
        >
            <div className='user__icon'>
                {(userInfo) 
                ?
                <p className="user__initials">{userInfo.name[0]}</p>
                :
                <UserIcon/>}
            </div>
            <p className={`user__name ${'user__name-' + theme}`}>
                {userInfo
                ? 
                userInfo.name
                : 
                'Sign In'}
            </p> 
            {viewMenu 
            &&
            <UserMain/>}
        </div>
    )
}