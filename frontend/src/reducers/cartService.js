import axios from 'axios'

const API_URL = '/api/cart'


const getCartItems = async (token) => {

   let config

   if(token)
    config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data

}

const addToCart = async (item, token) => {
  
  let config

   if(token)
    config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, item, config)

  return response.data

}


const createUserCart = async (user) => {

  const response = await axios.post(API_URL+'/user', user)

  return response.data

}


const removeItemFromCart = async (id, token) => {
  
  let config

   if(token)
    config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL+ "/" + id, config)

  return response.data

}

const updateCart = async (payload, token) => {
 
 let config

   if(token)
    config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL+ "/" + payload.id, {quantity: payload.quantity}, config)

  return response.data

}

const emptyCart = async (payload) => {

  const response = await axios.get(API_URL+ "/empty")

  return response.data

}

const cartService = {
  getCartItems,
  removeItemFromCart,
  addToCart,
  updateCart
}

export default cartService
