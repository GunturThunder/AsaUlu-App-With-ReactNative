export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    payload: data
  }
}

export const addQty = (cart) => {
  return {
    type: 'ADD_QTY',
    payload: cart
  }
}

export const reduceQty = (cart) => {
  return {
    type: 'REDUCE_QTY',
    payload: cart
  }
}

export const deleteFromCart = (cart) => {
  // console.log("hapus action",cart)
  return {
    type: 'DELETE_FROM_CART',
    payload: cart 
  }
}

export const removeCart = (cart) => {
  return {
    type: 'REMOVE_CART',
    payload: cart
  }
}