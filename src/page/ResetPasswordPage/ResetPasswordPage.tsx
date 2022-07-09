import React, { useEffect, useState} from "react";
import { Login } from "../../components/Login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useUserInfo } from "../../features/userInfo";
import { useResetPassword } from "../../features/resetPassword";
import { useNavigate } from "react-router-dom";

export const ResetPasswordPage = ( ) => {
    const { fetchResetPassword, errorResetPassword, resetPasswordUser } = useResetPassword();

    const [valueEmail, setValueEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const inputEmail = React.useRef<HTMLInputElement>(null);

    const changeInputEmail = (event: any): void => setValueEmail(event.target.value)


    const { notActiveUsers, userInfo } = useUserInfo();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = {
            notActiveUser: notActiveUsers,
            user:{
                name: 'test',
                email: valueEmail,
                password: 'test'
            }
        }
        fetchResetPassword(formData);
    }

    useEffect(() => {
        if(resetPasswordUser){
            navigate('/new-password')
        }
    }, [resetPasswordUser])

    useEffect(() => {   
        {errorResetPassword && setErrorEmail(errorResetPassword)}
    }, [errorResetPassword])

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
                title="Reset password"
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
                ]}
                forgot={false}
                button={<Button text="Sign in" className="button_primary" onClick={handleSubmit}/>}
            />
        </>
    )
}