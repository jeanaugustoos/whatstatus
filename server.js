const express = require('express')
const Joi = require('@hapi/joi')
const Bluebird = require('bluebird')
const schema = require('./schema')

const app = express()

app.use(express.json())

app.get('/', (_, response) => response.json({ status: 'ok' }))

app.all('/:status', async (request, response) => {
  try {
  const { value, error } = schema.validate(request, { allowUnknown: true })

  if (error) {
    return response.status(400).send(error.details)
  }
  const sleep = request.query.sleep || 0
  const status = request.params.status

  await Bluebird.delay(sleep)

  return response.status(status).send({})
  } catch (error) {
    console.log(error.message)
    return response.status(500).send({ message: 'Internal server error' })
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running')
})
