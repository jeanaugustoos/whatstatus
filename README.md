# whatstatus
[![Build Status](https://travis-ci.org/jeanaugustoos/whatstat.svg?branch=master)](https://travis-ci.org/jeanaugustoos/whatstat)

:pineapple: A service to respond http status as you wish

## Getting Started

### Usage

  ```
  http https://whatstatus.herokuapp.com/{statusCode}
  ```

**EXAMPLE - Getting a 404 status**

The follow example shows how to get a 404 response error using [httpie](https://httpie.org/).

  ```sh
  $ http https://whatstatus.herokuapp.com/404
  HTTP/1.1 404 Not Found
  Cache-Control: no-cache
  Connection: keep-alive
  Content-Length: 0
  ```

### First Install

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
If you never developed in this repo before:

**Clone the repository:**
  ```sh
  $ git clone git@github.com:jeanaugustoos/whatstatus
  ```

**Installing Dependencies**

Before run the project you must install all the dependencies.

  ```sh
  $ yarn install
  ```

### Running tests

  ```sh
  $ yarn test
  ```
### Running project

**development**
  ```sh
  $ yarn start:dev
  ```

**production**
  ```sh
  $ yarn start
  ```

## Authors

* **Jean Augusto Silva**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

