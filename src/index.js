const fastify = require('fastify')({
  logger: true
})
const mongoose = require('mongoose')


const routes = require('./routes')
const swagger = require('./config/swagger')

fastify.register(require('fastify-swagger'), swagger.options)

mongoose.connect('mongodb://localhost:27017/local-viva-dev', {
    useNewUrlParser: true
  })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err))


// Declare a route
fastify.get('/api', async (request, reply) => {
  return {
    hello: 'world'
  }
})

routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()