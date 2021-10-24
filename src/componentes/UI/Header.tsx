import React from 'react'
import { getUserName, getUserType } from '../../utils'
import Cookies from 'js-cookie'

const Header = (props: any) => {

    const logoutUser = () => {
        Cookies.remove("user_info");
        props.history.push("/");
    }

    return (
        <div className="header-section sticky">
            <p>Techify Task</p>
            <div className="row">
                <p>{getUserType(props?.id)}:<span>{getUserName(props?.id)}</span></p>
                <span onClick={logoutUser}>Log out</span>
            </div>
        </div>
    )
}

export default Header
