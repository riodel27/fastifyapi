const flatten = require('lodash/flatten')

const City = require('../models/City')
const cityrestauranttype = require('../models/cityrestauranttype')
const Restaurant_type = require('../models/Restaurant_Type')

exports.getCity = async (req, reply) => {
  try {
		const cities = await City.find()
		const cityRestaurantTypeResponse  = cities.map(async city => {
				const response = await cityrestauranttype.find({city_restaurant_types: city._id})
			if(response.length){
				const restaurant_types_response = response.map(async cityRestaurantType => {
					const individualRestaurantType = await Restaurant_type.find({
						_id : cityRestaurantType.restaurant_type_cities
					})
					return individualRestaurantType
				})	
				const restaurant_types_result = await Promise.all(restaurant_types_response)
				const filterOutRestaurant_types_result = restaurant_types_result.filter(data => data.length != 0)
				const flattenResult = flatten(filterOutRestaurant_types_result)
				return {
					...city._doc,
					restaurant_types: flattenResult
				}
			} else {
				return city
			}
		})
		const result = await Promise.all(cityRestaurantTypeResponse)
		return result
  } catch (error) {
    console.log('error: ', error)
  }
}