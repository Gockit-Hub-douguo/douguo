/* 接口聚合 */

var xbks = require('./xbkDrinks.js')
var filefood = require('./finefood.js')
var coffee =  require('./Coffee.js')
var shopping = require('./shopping.js')

var Interface = Object.assign({}, xbks, filefood, coffee, shopping)

module.exports = Interface