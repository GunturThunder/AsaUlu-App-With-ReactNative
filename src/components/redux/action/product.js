import axios from 'axios';
import {REACT_APP_API} from 'react-native-dotenv'

export const pagination = (data) => {
    return {
        type: 'GET_PAGINATION',
        payload: axios({
            method: "GET",
            url: process.env.REACT_APP_URL + `product?limit=6&page=${data}`,
            headers: {
                authorization: localStorage.getItem('token'),
                "user-id": localStorage.getItem('user-id')
            }
        })
    }
}

export const searchProduct = (name, category) => {
    return {
        type: 'GET_SEARCHPRODUCTS',
        payload: axios({
            method: "GET",
            url: `${REACT_APP_API}/product?&searchName=${name}&id_category=${category}`,
        })
    }
}

export const sortProduct = (data) => {
    return {
        type: 'GET_SORTPRODUCTS',
        payload: axios({
            method: "GET",
            url: `http://192.168.1.13:4040/product?sort=${data}`,
            headers: {
                authorization: localStorage.getItem('token'),
                "user-id": localStorage.getItem('user-id')
            }
        })
    }
}

export const getProducts = (name) => {
    if (name !== undefined) {
        return {
            type: 'GET_PRODUCTS',
            payload: axios({
                method: "GET",
                url: `${REACT_APP_API}/product?searchName=${name}`,
            })
        }
    }
    else {
        return {
            type: 'GET_PRODUCTS',
            payload: axios({
                method: "GET",
                url: `${REACT_APP_API}/product`,
            })
        }
    }
}

export const createProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: `${REACT_APP_API}/product`,
            data: data
        })
    }
}

export const updateProduct = (id_product, data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: axios({
            method: "PATCH",
            url: `${REACT_APP_API}/product/${id_product}`,
            data: data
        })
    }
}

export const deleteProduct = (id_product) => {
    return {
        type: "DELETE_PRODUCT",
        payload: axios({
            method: "DELETE",
            url: `${REACT_APP_API}/product/${id_product}`
        })
    }
}
