import axios from 'axios';

export const getUsers = () => {
    return{
        type: 'GET_USERS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.13:4040/user`
        })
    }
}

export const createUser = (data) => {
    return{
        type: 'POST_USERS',
        payload: axios({
            method: "POST",
            url: process.env.REACT_APP_URL+'user/register',
            data: data
        })
    }
}