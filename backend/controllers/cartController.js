const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const Cart = require('../models/cartModel')


const getCart = asyncHandler(async (req, res) => {
 
 const cartPromise = await Cart.findOne({ type : { $eq : "Guest" } }).populate('cart.product')

  if (!cartPromise) {
    res.status(404)
    throw new Error('No carts found')
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
 
  const c = await Cart.findOne({ type: "Guest" })

  console.log("item : "+req.body.item)

  const updatedCat = await Cart.findByIdAndUpdate(c._id, {  $push: {
            cart: {$each: [req.body.item]}
        } }) 

   res.status(200).json(updatedCat)  
  
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


const removeProductFromCart = asyncHandler(async (req, res) => {
 
 const c = await Cart.findOne({ type: "Guest" })

  console.log("id :" + req.params.id)

  const up = await Cart.update({ type: "Guest" } , { $pull: { "cart": { _id: req.params.id } }}) 
  
  res.status(200).json(it.product)

  /*
  c.cart.forEach(async (it) => 
         {
             if(it.product == req.params.id){
              console.log(it)
              var up = await Cart.update({ type: "Guest" } , { $pull: { "cart": { _id: it._id } }}) 
              console.log(up)
              res.status(200).json(it.product)
             } 
          } 
      )
      */

})


module.exports = {
  getCart,
  initCart,
  removeCart,
  removeProductFromCart,
  addToCart
}
