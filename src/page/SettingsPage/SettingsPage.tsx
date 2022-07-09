import React, {useEffect, useState} from "react";
import './SettingsPage.scss';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { Switch } from "../../components/Switch";
import { useUserInfo } from "../../features/userInfo";
import { type UserInfo } from "../../features/userInfo/userInfoSlice";

export const SettingsPage = ( ) => {

    const { userInfo, addActiveUser } = useUserInfo()

    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [valueNewPassword, setValueNewPassword] = useState('');

    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputNewPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);
    
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputNewPassword = (event: any): void => setValueNewPassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const chengePassword = () => {
        if(!errorPassword && userInfo && valueNewPassword && !errorConfirmPassword){

            const newUser: UserInfo = {
                name: userInfo?.name,
                email: userInfo.email,
                password: valueNewPassword,
                favoritePost: userInfo.favoritePost
            }
            addActiveUser(newUser)
            setValuePassword('')
            setValueNewPassword('')
            setValueConfirmPassword('')
        }
    }
    const cancel = () => {
        setValuePassword('')
            setValueNewPassword('')
            setValueConfirmPassword('')
    }

    useEffect(() => {
        {valueConfirmPassword != valueNewPassword
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}

    })
    useEffect(() => {
        if(valuePassword !== userInfo?.password && valuePassword){
            setErrorPassword('Неверный пароль')
        }else{
            setErrorPassword('')
        }
    }, [valuePassword])


    return (
        <div className="settings-page">
            <div className="settings-page__section">
                
                    {userInfo
                    &&
                    <div className="settings-page__profile">
                    <h3 className="settings-page__title">Profile</h3>
                        <div className="settings-page__section-select">
                            <Input 
                                label="Name"
                                placeholder="Your email"
                                disabled={false}
                                value={userInfo.name}
                                readOnly={true}
                            />
                            <Input 
                                label="Email"
                                placeholder="Your name"
                                disabled={false}
                                value={userInfo.email}
                                readOnly={true}
                            />
                        </div>
                    </div>
                    }   
                
                {userInfo
                &&
                <div className="settings-page__password">
                    <h3 className="settings-page__title">Password</h3>
                    <div className="settings-page__section-select">
                        <Input 
                            label="Password"
                            placeholder="Your password"
                            disabled={false}
                            onChange={changeInputPassword}
                            value={valuePassword}
                            ref={inputPassword}
                            error={errorPassword}
                        />
                        <div className="settings-page__section-new-password">
                            <Input 
                                label="New password"
                                placeholder="New password"
                                disabled={false}
                                onChange={changeInputNewPassword}
                                value={valueNewPassword}
                                ref={inputNewPassword}
                            />
                            <Input 
                                label="Confirm password"
                                placeholder="Confirm password"
                                disabled={false}
                                onChange={changeInputConfirmPassword}
                                value={valueConfirmPassword}
                                ref={inputConfirmPassword}
                                error={errorConfirmPassword}
                            />
                        </div>
                    </div>
                </div>
                }
                
                <div className="settings-page__theme">
                    <h3 className="settings-page__title">Color mode</h3>
                    <div className="settings-page__theme-section">
                        <div className="settings-page__theme_value">
                            <h4 className="settings-page__h4-value">Value!!!!!!!</h4>
                            <p className="settings-page__p-value">{`Use value theme`}</p>
                        </div>
                        <Switch disabled={false}/>
                    </div>
                </div>
                {userInfo
                &&
                <div className="settings-page__buttons">
                    <Button 
                        text="Cancel"
                        className="button_secondary"
                        disabled={false}
                        onClick={cancel}
                    />
                    <Button 
                        text="Save"
                        className="button_primary"
                        disabled={false}
                        onClick={chengePassword}
                    />
                </div>
                }
                
            </div>
        </div>
    )
}