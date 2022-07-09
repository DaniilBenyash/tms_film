import React, { useState, useEffect} from "react";
import { Login } from "../../components/Login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useUserInfo } from "../../features/userInfo";
import { useSignIn } from "../../features/signIn";
import { useNavigate } from "react-router-dom";

export const SignInPage = ( ) => {
    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);
    const inputPassword = React.useRef<HTMLInputElement>(null);
    
    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)
    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)

    const { errorSignIn, fetchSignIn} = useSignIn()

    const { notActiveUsers, userInfo } = useUserInfo();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            notActiveUser: notActiveUsers,
            user:{
                name: 'q',
                email: valueEmail,
                password: valuePassword
            }
        }
        fetchSignIn(formData);
    }

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    }, [userInfo])

    useEffect(() => {   
        {errorSignIn && setErrorEmail(errorSignIn)}
    }, [errorSignIn])

    useEffect(() => {
        const focusEmail = () => setErrorEmail('')

        inputEmail.current?.addEventListener('focus', focusEmail);    

        return () => {
            inputEmail.current?.removeEventListener('focus', focusEmail);    
        }
    })  

    useEffect(() => {
        inputEmail.current?.focus() 
    }, [valueEmail])

    return (
        <>
            <Login
                title="Sign In"
                inputs={[
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
                    error={errorPassword}
                    ref={inputPassword}
                    type='password'

                    />,
                ]}
                forgot={true}
                sign='up'
                button={<Button text="Sign in" className="button_primary" onClick={handleSubmit}/>}
            />
        </>
    )
}