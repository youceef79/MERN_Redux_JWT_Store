const mongoose = require('mongoose')

const catSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subcategories: [{
      type: mongoose.Schema.Types.ObjectId,
      Ref: "Categories",
    }],
    products: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
   }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Categories', catSchema)
