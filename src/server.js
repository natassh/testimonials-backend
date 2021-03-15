// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

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
    await fastify.listen(7000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()