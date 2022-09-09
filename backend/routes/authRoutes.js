const express = require('express')
const router = express.Router()
const {
  createUser,
  userLogin,
  userLogout,
} = require('../controllers/userController')

router.post('/', createUser)
router.post('/login', userLogin)
router.get('/logout', userLogout)

module.exports = router
