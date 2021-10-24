import React from 'react'
import { InputType } from '../../utils/collection';
import "./Style.css"

interface InputFieldProps {
    label: string;
    id?: string;
    type?: InputType;
    className?: string;
    value: string;
    placeholder?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {

    const { label, id = "input", type = "text", onChange, value = "", placeholder, className } = props;

    return (
        <div className={`input-box ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="input"
            />
        </div>
    )
}

export default InputField
