const express = require('express')
const router = express.Router()
const {
  getCart,
  initCart,
  removeCart,
  removeProductFromCart,
  addToCart,
  updateCart,
  emptyCart,
} = require('../controllers/cartController')


const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCart).post(protect, addToCart)
router.route('/:id').delete(protect, removeProductFromCart).put(protect, updateCart)

module.exports = router
