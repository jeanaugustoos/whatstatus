const test = require('ava')
const server = require('../server')

test('default route', (t) => {
  const request = {
    method: 'GET',
    url: '/',
  }

  return server.inject(request)
    .then(({ payload, statusCode }) => {
      t.is(statusCode, 200, 'statusCode is 200')
      t.is(payload, 'Whatstatus is running!', 'Message response is ok')
    })
})

test('allowed status code 200 | method GET', (t) => {
  const request = {
    method: 'GET',
    url: '/200',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 200, 'statusCode is 200')
    )
})

test('allowed status code 200 | method POST', (t) => {
  const request = {
    method: 'POST',
    url: '/200',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 200, 'statusCode is 200')
    )
})

test('allowed status code 200 | method PUT', (t) => {
  const request = {
    method: 'PUT',
    url: '/200',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 200, 'statusCode is 200')
    )
})

test('not allowed status code 666 | method GET', (t) => {
  const request = {
    method: 'GET',
    url: '/666',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

test('not allowed status code 666 | method POST', (t) => {
  const request = {
    method: 'POST',
    url: '/666',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

test('not allowed status code 666 | method PUT', (t) => {
  const request = {
    method: 'PUT',
    url: '/666',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

test('invalid status code "status" | method GET', (t) => {
  const request = {
    method: 'GET',
    url: '/status',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

test('invalid status code "status" | method POST', (t) => {
  const request = {
    method: 'POST',
    url: '/status',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

test('invalid status code "status" | method PUT', (t) => {
  const request = {
    method: 'PUT',
    url: '/status',
  }

  return server.inject(request)
    .then(({ statusCode }) =>
      t.is(statusCode, 400, 'statusCode is 400')
    )
})

