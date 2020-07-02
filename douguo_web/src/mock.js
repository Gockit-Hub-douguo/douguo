
var express = require('express')
var app = express()
var Mock = require('mockjs')

app.get('/getbanner', function(req, res) {
  console.log(req)
  var data = Mock.mock({
    code: 200,
    msg: '请求接口成功',
    'data|10': [{
      'id|1-100': 1,
      title: '@csentence',
      image: '@image'
    }]
  })
  res.json(data)
})
app.listen(3000)
