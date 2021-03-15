// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const port = process.env.PORT || 4000;

const testimonials = require('./data/testimonials.json');

fastify.register(require('fastify-cors'), { 
    // put your options here
  })

  
// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: ' Fastify world' }
})

fastify.get('/testimonials', async (request, reply) => {
    return testimonials
  })
  

// Run the server!
const start = async () => {
  try {
    // await fastify.listen(7000)
    await fastify.listen(port, '0.0.0.0') // los 0.0 son para heroku para evitar el R10 error
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()