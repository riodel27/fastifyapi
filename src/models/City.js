const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const RestaurantType = require('../models/Restaurant_Type')

// const city_restaurant_types__restaurant_type_cities = require('../models/city_restaurant_types__restaurant_type_cities')

// instead mongoose use the connection initiated from mongoose create Connection?
// how to do that?


// const cityrestauranttype = require('../models/cityrestauranttype')

// console.log('CITY RESTAURANT TYPE: ', cityrestauranttype)

const citySchema = new mongoose.Schema({
  name: {
    type: Object,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  shortname: {
    type: String,
    required: true
  },
  location: {
    type: Object
  },
  description: {
    type: Object
  },
  isLive: {
    type: Boolean,
    required: true,
    default: false
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  coordinate: {
    type: Object
  },
  timezone: {
    type: String
  },
  // one to many with restaurant_type
  city_restaurant_types: [{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'cityrestauranttype'
  }]
})





module.exports = mongoose.model('city', citySchema, 'city')