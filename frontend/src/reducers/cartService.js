import axios from 'axios'

const API_URL = 'http://localhost:5000/api/cart'


const getCartItems = async () => {

  const response = await axios.get(API_URL)

  return response.data

}

const addToCart = async (item) => {

  const response = await axios.post(API_URL, item)

  return response.data

}

const removeItemFromCart = async (id) => {

  const response = await axios.delete(API_URL+ "/" + id)

  return response.data

}

const cartService = {
  getCartItems,
  removeItemFromCart,
  addToCart
}

export default cartService
