import React, { useState } from 'react'
import { LoginFormTypes, LoginKeys } from '../../utils/collection';
import { loginForm } from '../../utils/formData';
import { loginPreConfigData } from '../../utils/preConfigData';
import { checkValuesExist, valideteValues } from '../../utils/validator';
import ErrorMessage from '../UI/ErrorMessage';
import InputField from '../UI/InputField'
import "../UI/Style.css"
import Cookies from 'js-cookie'

const Login = (props: any) => {

    const [formData, setFormData] = useState<LoginFormTypes>({ ...loginForm });//initialize form values
    const [errorsValues, setErrorsValues] = useState<LoginFormTypes>({ ...loginForm });//initialize error values
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true); //using for managing button disable/anable state

    const handleLogin = (evt: React.SyntheticEvent) => {
        evt.preventDefault();
        const { isValid, errors } = valideteValues(formData, errorsValues);
        setErrorsValues(errors);

        if (isValid) {
            validateUser(formData.email, formData.password);
        }
    }

    const updateValue = (key: LoginKeys, evt: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...formData };
        data[key] = evt.target.value;
        setFormData(data);
        const isValid = checkValuesExist(data); //this line retun ture if all values are filled
        setIsDisabled(!isValid);
        setErrorsValues({ ...loginForm })
    }

    const validateUser = (email: string, pass: string) => {
        let validUser = null;
        const listData = [...loginPreConfigData]
        for (var i = 0; i < listData.length; i++) {
            if ((email === listData[i].email) && (pass === listData[i].password)) {
                validUser = listData[i];
                break;
            }
        }
        if (validUser) {
            Cookies.set("user_info", JSON.stringify(validUser));
            props.history.push(`/dashboard/${validUser.id}`);
        }
        else {
            alert("User not found!")
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login</h1>
                <form noValidate onSubmit={handleLogin} className="form">
                    <InputField
                        value={formData?.email}
                        type="email"
                        label="Email"
                        id="email"
                        onChange={(evt) => updateValue("email", evt)}
                    />
                    <ErrorMessage message={errorsValues?.email} />
                    <InputField
                        value={formData?.password}
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(evt) => updateValue("password", evt)}
                        className="top_30"
                    />
                    <ErrorMessage message={errorsValues?.password} />
                    <button disabled={isDisabled} type="submit" className="btn top_50">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
