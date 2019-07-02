const cityController = require('../controller/cityController')
const restaurantTypeController = require('../controller/RestaurantTypeController')
const cityRestaurantTypeController = require('../controller/cityRestaurantTypeController')
const routes = [{
    method: 'GET',
    url: '/api/city',
    handler: cityController.getCity
  },
  {
    method: 'GET',
    url: '/api/restaurant_type',
    handler: restaurantTypeController.getRestaurantType
  },
  {
    method: 'GET',
    url: '/api/restaurant_type_city',
    handler: cityRestaurantTypeController.getCityRestaurantType
  }
]


module.exports = routes