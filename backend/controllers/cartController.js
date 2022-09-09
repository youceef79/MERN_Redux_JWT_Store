const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const Cart = require('../models/cartModel')
const User = require('../models/userModel')

const getCart = asyncHandler(async (req, res) => {

 let cartPromise = ''

 if(!req.user){

  cartPromise = await Cart.findOne({ type : { $eq : "Guest" } }).populate('cart.product')

  if (!cartPromise) {
    res.status(404)
    throw new Error('No carts found')
  } 

 } else {

  cartPromise = await Cart.findOne({ type: "User", user: req.user._id }).populate('cart.product')

  if (!cartPromise) {
    res.status(404)
    throw new Error('No carts found')
  }
 
 }
 
  res.status(200).json(cartPromise.cart)

})


const initCart = asyncHandler(async (req, res) => {
 
 const cart = await Cart.find({ type : { $eq : "Guest" } })

  if (cart) {
    throw new Error('cart already found')
  } else  {
  const cartCreated = await Cart.create({
    type: "Guest",
    cart: [],
    })
    res.status(200).json(cartCreated)
  }

})



const addToCart = asyncHandler(async (req, res) => {

  let updatedCat = ''

  if(!req.user){
  
   let guestPromise = await Cart.findOne({ type: "Guest" })

   updatedCat = await Cart.findOneAndUpdate(guestPromise._id, {  $push: {
            cart: {$each: [req.body.item]}
        } },  { returnOriginal: false }).populate('cart.product')
   
   } else {

   let userPromise  = await Cart.findOne({ type: "User", user: req.user._id })


   updatedCat = await Cart.findOneAndUpdate({ _id: userPromise._id }, {  $push: {
            cart: {$each: [req.body.item]}
        } },  { returnOriginal: false }).populate('cart.product')
 
   }  


   res.status(200).json(updatedCat.cart)
  
  });



const removeCart = asyncHandler(async (req, res) => {
 
 const cart = await Cart.find()

  if (!cart) {
    res.status(404)
    res.message("cart not found")
    throw new Error('No cart found')
  }

  cart.remove()

  res.status(200).json(cart)

})


const updateCart = asyncHandler(async (req, res) => {

  if(!req.user){

 const up = await Cart.update( {  type: "Guest" } ,{ $set: { "cart.$[elem].quantity" : req.body.quantity } }, {
     multi: false,
     arrayFilters: [ { "elem._id": req.params.id } ]
   })
  

  } else {
    
    const up = await Cart.update( {  type: "User", user: req.user._id } ,{ $set: { "cart.$[elem].quantity" : req.body.quantity } }, {
     multi: false,
     arrayFilters: [ { "elem._id": req.params.id } ]
   })

  } 

   res.status(200).json({ id: req.params.id, quantity: req.body.quantity }) 

})



const removeProductFromCart = asyncHandler(async (req, res) => {

  if(!req.user){
 
  const up = await Cart.update({ type: "Guest" } , { $pull: { "cart": { _id: req.params.id } }})  

  } else {

   const up = await Cart.update({ type: "User", user: req.user._id } , { $pull: { "cart": { _id: req.params.id } }})
  
  }

   res.status(200).json({id: req.params.id})

})


module.exports = {
  getCart,
  initCart,
  removeCart,
  removeProductFromCart,
  addToCart,
  updateCart,
}
