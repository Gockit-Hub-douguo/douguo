var express = require('express')
var Interface = require('./common/polymerization.js')
var app = express()

app.use(express.static('./uploadImg'))

app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*")
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type")
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS")
  // if (req.method.toLowerCase() == 'options')
  //     res.send(200);  //让options尝试请求快速结束
  // else
  next()
})

app.get('/GetSetIcetune',Interface.GetSetIcetune)
app.post('/PostAddIcetune', Interface.PostAddIcetune)
app.get('/GetSetEspresso', Interface.GetSetEspresso)
app.get('/GetSetStar', Interface.GetSetStar)
app.get('/GetSetTea', Interface.GetSetTea)
app.get('/GetSetBaking', Interface.GetSetBaking)
app.get('/GetSetCake', Interface.GetSetCake)
app.get('/GetSetSandwich', Interface.GetSetSandwich)
app.post('/PostAddFineFood', Interface.PostAddFineFood)
app.get('/GetSetModerate', Interface.GetSetModerate)
app.get('/GetSetDepth', Interface.GetSetDepth)
app.post('/PostAddCoffee', Interface.PostAddCoffee)
app.get('/GetSetShoppingcg', Interface.GetSetShoppingcg)

app.listen(80)