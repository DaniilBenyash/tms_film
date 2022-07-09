import React, { useEffect, useState} from "react";
import { Login } from "../../components/Login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../features/userInfo";
import { useResetPassword } from "../../features/resetPassword";
import { useNewPassword } from "../../features/newPassword";
import { type TypeSign } from "../../features/userInfo/userInfoSlice";

export const NewPasswordPage = ( ) => {

    const [valuePassword, setValuePassword] = useState('');

    const [valueConfirmPassword, setValueConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const inputPassword = React.useRef<HTMLInputElement>(null);
    const inputConfirmPassword = React.useRef<HTMLInputElement>(null);

    const changeInputPassword = (event: any): void => setValuePassword(event.target.value)
    const changeInputConfirmPassword = (event: any): void => setValueConfirmPassword(event.target.value)

    const navigate = useNavigate();

    const { notActiveUsers } = useUserInfo()
    const { resetPasswordUser } = useResetPassword()
    const { fetchNewPassword } = useNewPassword()

    const handleSubmit = () => {
        if(resetPasswordUser){
            const formData: TypeSign = {

                notActiveUser: notActiveUsers,
                user: {
                    name: resetPasswordUser?.name,
                    email: resetPasswordUser?.email,
                    password: valuePassword
                }
                
            }
            {valuePassword === valueConfirmPassword
                &&
                fetchNewPassword(formData)}
                navigate('/')
        }
    }

    useEffect(() => {
        {valueConfirmPassword != valuePassword
        ?
        setErrorConfirmPassword("Passwords don't match")
        :
        setErrorConfirmPassword('')}
    }, [valueConfirmPassword, valuePassword])

    return (
        <>
            <Login
                title="New password"
                inputs={[
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
                button={<Button text="Sign in" className="button_primary" onClick={handleSubmit}/>}
            />
        </>
    )
}