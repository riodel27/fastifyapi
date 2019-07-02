const cityRestaurantType = require('../models/cityrestauranttype')

exports.getCityRestaurantType = async (req, reply) => {
  try {
    const restaurantTypesCity = await cityRestaurantType.find().populate('restaurant_type_cities')
    return restaurantTypesCity
  } catch (error) {
    console.log('error: ', error)
  }
}