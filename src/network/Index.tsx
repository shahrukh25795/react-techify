import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios';

interface NewtworkProps {

}

const Index = (Props: NewtworkProps) => {

    React.useEffect(() => {
        initInterceptor()
    }, []);

    //init interceptor
    const initInterceptor = () => {

        let token: string = "";
        token = Cookies.get('token') || ""

        axios.interceptors.request.use((config: any) => {

            console.log("API config====>", config)

            if (token)
                config.headers.Authorization = token;
            return config;

        }, (error) => Promise.reject(error));

        axios.interceptors.response.use((response: any) => response, (error) => Promise.reject(error));
    }

    return null
}

export default Index
