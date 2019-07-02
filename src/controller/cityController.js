const City = require('../models/City')


exports.getCity = async (req, reply) => {
  try {
    const cities = await City.find().populate('city_restaurant_types')
    return cities
  } catch (error) {
    console.log('error: ', error)
  }
}