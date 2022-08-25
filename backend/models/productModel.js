const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,   //mongoose.Schema.Types.ObjectId,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
     image: { 
      type: String, 
    },
      price: {
        type: String,
        required: true, 
      },
     categorie: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Categories', 
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Products', productSchema)
