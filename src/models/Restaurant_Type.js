const mongoose = require('mongoose')

// instead mongoose use the connection initiated from mongoose create Connection?
// how to do that?


const RestaurantTypeSchema = new mongoose.Schema({
  name: {
    type: Object,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  searchSpec: {
    type: String,
    required: true
  },
  iosSearch: {
    type: String
  },
  iosSort: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('restaurant_type', RestaurantTypeSchema, 'restaurant_type')