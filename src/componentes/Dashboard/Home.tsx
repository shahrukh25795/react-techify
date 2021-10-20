import React, { useEffect, useState } from 'react'
import { getApi, userList } from '../../network/Request';
import Header from '../UI/Header'
import AdminUserList from './AdminUserList';

interface HomeProps {

}

const Home = (props: HomeProps) => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        getUserList()
    }, []);


    const getUserList = () => {
        getApi(userList).then((res) => {
            if (res?.data?.length > 0) {
                setAllData(res.data)
            }
        }).catch(error => console.log(error))
    }

    return (
        <div className="user-container">
            <Header />
            <AdminUserList
                allData={allData}
            />
        </div>
    )
}

export default Home
