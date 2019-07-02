const RestaurantType = require('../models/Restaurant_Type')

exports.getRestaurantType = async (req, reply) => {
  try {
    const restaurantTypes = await RestaurantType.find()
    return restaurantTypes
  } catch (error) {
    console.log('error: ', error)
  }
}