const express = require('express')
const router = express.Router()
const {
  getProducts,
  getCategories
} = require('../controllers/productController')


//const { protect } = require('../middleware/authMiddleware')

router.get('/products', getProducts)
router.get('/categories', getCategories)

module.exports = router
