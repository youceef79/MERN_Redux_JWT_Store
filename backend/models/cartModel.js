const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
  {
    type: {
      type: String,   //mongoose.Schema.Types.ObjectId,
      required: true,
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
