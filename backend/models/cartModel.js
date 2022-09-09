const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
  {
    type: {
      type: String,   //mongoose.Schema.Types.ObjectId,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, 
     },
    cart: [{
        product: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Products"
         },
        quantity: String,
   }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Carts', cartSchema)
