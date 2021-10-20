import axios from 'axios';

export const userList = "https://jsonplaceholder.typicode.com/todos/"


export const getApi = (url: string) => {
    return axios({
        method: 'GET',
        headers: undefined,
        url: url,
        responseType: 'json'
    }).then(res => res).catch(err => err.response);
}