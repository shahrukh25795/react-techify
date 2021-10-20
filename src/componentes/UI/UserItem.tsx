import React from 'react'
import { User } from '../../utils/collection'

interface UserItemProps {
    item: User
}

const UserItem = ({ item, ...props }: UserItemProps) => {
    return (
        <div className="user-list" key={item?.id}>
            <p><b>Title: </b>{item?.title}</p>
            <p><b>Description: </b>{item?.desc || "Not Available"}</p>
        </div>
    )
}

export default UserItem
