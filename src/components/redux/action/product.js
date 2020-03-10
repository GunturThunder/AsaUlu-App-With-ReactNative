import axios from 'axios';

export const pagination = (data) => {
    return {
        type: 'GET_PAGINATION',
        payload: axios({
            method: "GET",
            url: process.env.REACT_APP_URL+`product?limit=6&page=${data}`,
            headers:{
                authorization: localStorage.getItem('token'),
                "user-id" : localStorage.getItem('user-id')
            }
        })
    }
}

export const searchProduct = (name,sort) => {
    return {
        type: 'GET_SEARCHPRODUCTS',
        payload: axios({
            method: "GET",
            url:  process.env.REACT_APP_URL+`product?limit=6&searchName=${name}&sort=${sort}`,
            headers:{
                authorization: localStorage.getItem('token'),
                "user-id" : localStorage.getItem('user-id')
            }
        })
    }
}

export const sortProduct = (data) => {
    return {
        type: 'GET_SORTPRODUCTS',
        payload: axios({
            method: "GET",
            url: process.env.REACT_APP_URL+`product?sort=${data}`,
            headers:{
                authorization: localStorage.getItem('token'),
                "user-id" : localStorage.getItem('user-id')
            }
        })
    }
}

export const getProducts = () => {
    return{
        type: 'GET_PRODUCTS',
        // headers: {
            
        // },
        payload: axios({
            method: "GET",
            url: 'http://192.168.1.8:4040/product',
            // headers:{
            //     authorization: localStorage.getItem('token'),
            //     "user-id" : localStorage.getItem('user-id')
            // }
        })
    }
}

export const createProduct = (data) => {
    return{
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: 'http://192.168.1.8:4040/product?page=1',
            data: data
        })
    }
}

export const updateProduct = (id_product, data) => {
    return{
        type: "UPDATE_PRODUCT",
        payload: axios({
            method: "PATCH",
            url: process.env.REACT_APP_URL+`product/${id_product}`,
            data: data
        })
    }
}

export const deleteProduct = (id_product) => {
    return{
        type: "DELETE_PRODUCT",
        payload: axios({
            method: "DELETE",
            url: `http://localhost:4040/product/${id_product}`
        })
    }
}
