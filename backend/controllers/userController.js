const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

const Cart = require('../models/cartModel')

const createUser = asyncHandler(async (req, res) => {

 const userPromise = await User.findOne({ email : { $eq : req.body.email } })

 if(userPromise) {
    res.status(400)
    throw new Error('email has been already used !')
 }
  
 const sign = await bcrypt.genSalt(10)
 const hashedPassword = await bcrypt.hash(req.body.password, sign)
 

 const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  })

  if (user) {

    const cartUser = await Cart.create({
    type: "User",
    user: user._id,
    cart: [],
    })

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: null,
    })

  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

})


const userLogin = asyncHandler(async (req, res) => {

 const user = await User.findOne({ email : { $eq : req.body.email } })

  if (user && (await bcrypt.compare(req.body.password, user.password.toString()))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

const userLogout = asyncHandler(async (req, res) => {
 
   const up = await Cart.update({ type: "Guest" } , { $set: { cart: [] }})

   res.status(200).json(up)

})



const generateToken = (id) => {
  return jwt.sign({ id: id } , process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
}

module.exports = {
  userLogin,
  createUser,
  userLogout,
}
