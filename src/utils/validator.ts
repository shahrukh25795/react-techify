import { LoginFormTypes, LoginKeys } from "./collection";

//check email is valid or not
export const validateEmail = (value: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
};

//check password is valid or not
export const validatePassword = (value: string): boolean => {
    const passPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    return passPattern.test(value);
};

//check nestest object values are filled or not
export const checkValuesExist = (obj: any = {}) => {
    let isValid = true;
    for (let key in obj) {
        if (!obj?.[key]) {
            isValid = false;
            break;
        }
    }
    // true:- all values are filled
    // false:- all values are not filled
    return isValid;
};

export const valideteValues = (data: LoginFormTypes, errorValues: LoginFormTypes) => {
    let errors = { ...errorValues }, isValid = true;
    let key: LoginKeys
    for (key in data) {
        if (key === "email")
            if (!validateEmail(data?.[key])) {
                errors.email = "Email is not valid.";
                isValid = false;
            }
        if (key === "password")
            if (!validatePassword(data?.[key])) {
                errors.password = "Password is not valid.";
                isValid = false;
            }
    }
    return { isValid, errors }
}