import React from 'react'
import { User } from '../../utils/collection'
import UserItem from '../UI/UserItem'

interface AdminUserListProps {
    allData: Array<User>
}

const AdminUserList = ({ allData }: AdminUserListProps) => {
    return (
        <div className="admin-user">
            <h1>User List</h1>
            <div className="users">
                {allData?.length > 0 && allData.map((item) => <UserItem item={item} />)}
            </div>
        </div>
    )
}

export default AdminUserList
