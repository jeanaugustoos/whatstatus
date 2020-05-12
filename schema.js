const Joi = require('@hapi/joi')
const { STATUS_CODES } = require('http')

const allowedStatusCode = Object.keys(STATUS_CODES).map(Number)

module.exports = Joi.object().keys({
  query: {
    sleep: Joi
      .number()
      .min(0)
      .max(5000),
  },
  params: {
    status: Joi
    .number()
    .valid(...allowedStatusCode)
    .required()
    .error(new Error('Invalid status code')),
  },
})

