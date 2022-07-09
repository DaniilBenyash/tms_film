import React, { useEffect, useState} from "react";
import { Login } from "../../components/Login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../features/userInfo";
import { useSignUp } from "../../features/signUp";
import { type TypeSign } from "../../features/userInfo/userInfoSlice";

export const SignUpPage = () => {

    const [valueName, setValueName] = useState('');

    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [valuePassword, setValuePassword] = useState('');

    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputName = React.useRef<HTMLInputElement>(null);
    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputName = (event: any): void => setValueName(event.target.value)
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const { notActiveUsers, userInfo } = useUserInfo()
    const { fetchSignUp, errorSignUp } = useSignUp()

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData: TypeSign = {

            notActiveUser: notActiveUsers,
            user: {
                name: valueName,
                email: valueEmail,
                password: valuePassword
            }
        }
        
        if(valuePassword === valueConfirmPassword){
            fetchSignUp(formData)
        }
    }

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    }, [userInfo, navigate])

    useEffect(() => {
        if(errorSignUp){
            setErrorEmail(errorSignUp)
        }
    }, [errorSignUp])

    useEffect(() => {
        const currentEmail = inputEmail.current
        const focusEmail = () => setErrorEmail('')

        currentEmail?.addEventListener('focus', focusEmail);
        if(valueConfirmPassword !== valuePassword){
            setErrorConfirmPassword("Passwords don't match")
        } else {
            setErrorConfirmPassword('')
        }

        return () => {
            currentEmail?.removeEventListener('focus', focusEmail);
        }
    }, [valueConfirmPassword, valuePassword])

    useEffect(() => {
        inputName.current?.focus()
        setErrorEmail('');
    }, [valueName])

    return (
        <>
            <Login
                title="Sign Up"
                inputs={[
                    <Input 
                        label='Name'
                        placeholder='Your name'
                        disabled={false}
                        onChange={changeInputName}
                        value={valueName}
                        ref={inputName}
                        type='name'
                    />,
                    <Input 
                        label='Email'
                        placeholder='Your email'
                        disabled={false}
                        onChange={changeInputEmail}
                        value={valueEmail}
                        error={errorEmail}
                        ref={inputEmail}
                        type='email'
                    />,
                    <Input 
                        label='Password'
                        placeholder='Your password'
                        disabled={false}
                        onChange={changeInputPassword}
                        value={valuePassword}
                        ref={inputPassword}
                        type='password'
                    />,
                    <Input 
                        label='Confirm Password'
                        placeholder='Confirm Password'
                        disabled={false}
                        onChange={changeInputConfirmPassword}
                        value={valueConfirmPassword}
                        error={errorConfirmPassword}
                        ref={inputConfirmPassword}
                        type='password'
                    />,
                ]}
                forgot={false}
                sign='in'
                button={
                    <Button 
                        text="Sign up" 
                        className="button_primary" 
                        onClick={handleSubmit}
                    />
                }
            />
        </>
    )
}