const Hapi = require('hapi')
const Joi = require('joi')

const allowedStatusCode = require('./configs/httpStatusCodes')

const server = new Hapi.Server()
server.connection({
  port: process.env.PORT || '8080',
})

server.route({
  method: '*',
  path: '/{status}',
  handler: (request, reply) => {
    const { params: { status } } = request
    reply().code(status)
  },
  config: {
    validate: {
      params: {
        status: Joi
          .number()
          .valid(allowedStatusCode)
          .required()
          .error(new Error('Invalid status code')),
      },
    },
  },
})

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err
    }

    console.log(`Server running at ${server.info.uri}`)
  })
}

module.exports = server

