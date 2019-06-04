'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.20.18:8080/api/v1"',
  SCENE_URL:'"http://192.168.20.18:800"'
  //BASE_API: '"http://61.186.187.111:6733/api/v1"'
})
