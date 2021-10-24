import React, { useEffect, useState } from 'react'
import { getApi, userList } from '../../network/Request';
import { DataType } from '../../utils/collection';
import { ramUserPreConfigData, shyamUserPreConfigData } from '../../utils/preConfigData';
import Header from '../UI/Header'
import AdminUserList from './AdminUserList';

const Home = (props: any) => {

    const [allData, setAllData] = useState<Array<DataType>>([]);

    const id = props?.match?.params?.id || "1";


    useEffect(() => {
        if (id === "1")
            getUserList();
    }, [id]);


    const getUserList = () => {
        getApi(userList).then((res) => {
            if (res?.data?.length > 0) {
                setAllData(res.data)
            }
        }).catch(error => console.log(error))
    }

    return (
        <div className="user-container">
            <Header
                id={id}
                {...props}
            />
            <AdminUserList
                allData={id === "2" ? [...ramUserPreConfigData] : id === "3" ? [...shyamUserPreConfigData] : allData}
            />
        </div>
    )
}

export default Home
