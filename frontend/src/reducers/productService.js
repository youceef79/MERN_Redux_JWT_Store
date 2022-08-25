import axios from 'axios'

const API_URL = '/api'


const getProducts = async () => {

  const response = await axios.get(API_URL+'/products')

  return response.data

}

const getCategories = async () => {

  const response = await axios.get(API_URL+'/categories')

  return response.data

}

const productService = {
  getProducts,
  getCategories,
}

export default productService
