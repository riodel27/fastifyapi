const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const RestaurantType = require('../models/Restaurant_Type')

// instead mongoose use the connection initiated from mongoose create Connection?
// how to do that?

const cityRestaurantTypeSchema = new mongoose.Schema({
  city_restaurant_types: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city'
  },
  restaurant_type_cities: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant_type'
  }
})

module.exports = mongoose.model('cityrestauranttype', cityRestaurantTypeSchema, 'cityrestauranttype')