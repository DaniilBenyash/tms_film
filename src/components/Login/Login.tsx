import React, { ReactElement } from "react";
import './Login.scss';
import { ReactComponent as Logo } from '../../assets/image/logo.svg'
import { Form } from "../../components/Form";
import { Link } from 'react-router-dom'

type LoginProps = {
    title: string,
    inputs: ReactElement[],
    forgot: boolean,
    sign?: string,
    button: ReactElement,
}

export const Login = ({title, inputs, forgot, sign, button}: LoginProps) => {

    return (
        <div className="login">
            <div className="login__section">
                <div className="login__header">
                    <div className="login__logo">
                        <Link to='/'><Logo/></Link>
                    </div>
                </div>
                <div className="login__form">
                    <Form
                        title={title}
                        inputs={inputs}
                        forgot={forgot}
                        button={button}
                        sign={sign}
                    />
                </div>
                <div className="login__footer">
                    <p className="login__сopyright">© All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}