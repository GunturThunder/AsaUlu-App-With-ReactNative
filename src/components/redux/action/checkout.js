import axios from 'axios'

export const postOrder = (data) => {
    // console.log(data)
    return {
      type: 'POST_ORDER',
      payload: axios.post(`http://20.20.20.147:4040/order`, data)
    }
  }