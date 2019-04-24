'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.20.18:8080/api/v1"'
  // BASE_API: '"http://61.186.187.111:8090/tdv-webapp"'
  //  BASE_API: '"http://localhost:3000"'
})
