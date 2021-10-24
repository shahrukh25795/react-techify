import React, { useEffect, useState } from 'react'
import { getApi, userList } from '../../network/Request';
import { DataType, AddtodoKey, AddTodoFormTypes } from '../../utils/collection';
import { addTodoForm } from '../../utils/formData';
import { ramUserPreConfigData, shyamUserPreConfigData } from '../../utils/preConfigData';
import { checkValuesExist } from '../../utils/validator';
import Header from '../UI/Header'
import AddUser from './AddUser';
import AdminUserList from './AdminUserList';

const Home = (props: any) => {

    const [allData, setAllData] = useState<Array<DataType>>([]);
    const [isShow, setIsShow] = useState(false)
    const [formData, setFormData] = useState<AddTodoFormTypes>({ ...addTodoForm });//initialize form values
    const [isDisabled, setIsDisabled] = useState<boolean>(true); //using for managing button disable/anable state


    const id = props?.match?.params?.id || "1";

    useEffect(() => {
        if (id === "1")
            getUserList();
        if (id === "2")
            setAllData([...ramUserPreConfigData])
        if (id === "3")
            setAllData([...shyamUserPreConfigData])
    }, [id]);


    const getUserList = () => {
        getApi(userList).then((res) => {
            if (res?.data?.length > 0) {
                setAllData(res.data)
            }
        }).catch(error => console.log(error))
    }

    const updateValue = (key: AddtodoKey, evt: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...formData };
        data[key] = evt.target.value;
        setFormData(data);
        const isValid = checkValuesExist(data); //this line retun ture if all values are filled
        setIsDisabled(!isValid);
    }

    const handleAdd = () => {
        let list = [...allData];
        const obj: any = {
            id: list.length + 1,
            ...formData
        }
        list.push(obj);
        setAllData(list);
        resetSatte();
    }

    const resetSatte = () => {
        setFormData({ ...addTodoForm });
        setIsShow((prvState) => !prvState);
        setIsDisabled(true)
    }

    return (
        <div className="user-container">
            <Header
                id={id}
                {...props}
            />
            <AdminUserList
                allData={allData}
            />
            {id === "2" || id === "3"
                ?
                <AddUser
                    isShow={isShow}
                    onToggole={resetSatte}
                    onAdd={handleAdd}
                    updateValue={updateValue}
                    formData={formData}
                    isDisabled={isDisabled}
                    {...props}
                />
                : null
            }
        </div>
    )
}

export default Home
