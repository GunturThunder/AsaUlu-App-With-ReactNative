import axios from 'axios'

export const postOrder = (data) => {
    // console.log(data)
    return {
      type: 'POST_ORDER',
      payload: axios.post(`${REACT_APP_API}/order`, data)
    }
  }