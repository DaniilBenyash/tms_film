import React, { ReactElement } from "react";
import './Form.scss';
import { Link } from "react-router-dom";

type FormProps = {
    title: string,
    inputs: ReactElement[],
    forgot: boolean,
    sign?: string,
    button: ReactElement,
}

export const Form = ({title, inputs, forgot, sign, button}: FormProps) => {



    
    return (
        <div className="form">
            <div className="form__section">
                <h3 className="form__title">{title}</h3>
                <div className="form__inputs">
                    {inputs.map((input, index) => {
                        return (
                            <div key={index}>
                                {input}
                            </div>
                        )
                    })}
                </div>
                
                {forgot
                &&
                <Link to='/reset-password' className="form__button-forgot">Forgot password?</Link>
                }
                <div className="form_padding_40">
                    {button}
                </div>
                

                {sign === 'up' 
                && 
                <p className="form__text">Don't have an account?
                    <Link to='/sign-up' className="form__button-sign-up"> Sign Up</Link>
                </p>}

                {sign === 'in'
                &&
                <p className="form__text">Already have an account?
                    <Link to='/sign-in' className="form__button-sign-up"> Sign In</Link>
                </p>}  
            </div>
        </div>
    )
}