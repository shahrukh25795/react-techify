import React from 'react'
import { AddTodoFormTypes } from '../../utils/collection';
import InputField from '../UI/InputField'

interface AddUserProps {
    isShow: boolean;
    isDisabled: boolean;
    onToggole: () => void;
    onAdd: () => void;
    updateValue: (key: string, value: React.ChangeEvent<HTMLInputElement>) => void;
    formData?: AddTodoFormTypes
}

const AddUser = ({ isShow, onToggole, onAdd, updateValue, isDisabled, formData }: AddUserProps) => {

    const handleAdd = (evt: React.SyntheticEvent) => {
        evt.preventDefault();
        onAdd();
    }

    return (
        <div className="container">
            <div className="center">
                {!isShow
                    ?
                    <button onClick={onToggole} type="button" className="btn add-btn">Add Todo</button>
                    :
                    <div className="add-todo">
                        <div className="card">
                            <h1>Add Todo</h1>
                            <form noValidate onSubmit={handleAdd} className="form">
                                <InputField
                                    value={formData?.title || ""}
                                    label="Title"
                                    id="title"
                                    onChange={(evt) => updateValue("title", evt)}
                                />
                                <InputField
                                    value={formData?.desc || ""}
                                    label="Description"
                                    type="text"
                                    id="desc"
                                    onChange={(evt) => updateValue("desc", evt)}
                                    className="top_30"
                                />
                                <div className="row">
                                    <button
                                        disabled={isDisabled}
                                        type="submit"
                                        className="btn top_50">Add</button>
                                    <button
                                        style={{ backgroundColor: "red", marginLeft: "10px" }}
                                        onClick={onToggole}
                                        type="button"
                                        className="btn top_50">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AddUser
