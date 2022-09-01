const express = require('express')
const router = express.Router()
const {
  getCart,
  initCart,
  removeCart,
  removeProductFromCart,
  addToCart,
  updateCart,
} = require('../controllers/cartController')


//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCart).post(addToCart)
router.route('/:id').delete(removeProductFromCart).put(updateCart)

module.exports = router
