const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const Categ = require('../models/categorieModel')


const getProducts = asyncHandler(async (req, res) => {
 
 const products = await Product.find()

  if (!products) {
    res.status(404)
    throw new Error('No products found')
  }

  res.status(200).json(products)
})


const getCategories = asyncHandler(async (req, res) => {
 
 const cats = await Categ.find()

  if (!cats) {
    res.status(404)
    throw new Error('No products found')
  }

  res.status(200).json(cats)
})




module.exports = {
  getProducts,
  getCategories,
}
