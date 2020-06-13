const express = require('express')
const { RouterView } = require('./public')
const bodyParser = require('body-parser')

const app = express()
// 使用静态服务器
app.use(express.static("./uploads"))


// 解析application/json
app.use(bodyParser.json());

// 解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/upload', RouterView.uploadCondig('images/', 20, ['image/jpeg', 'image/jpg']), RouterView.upload)

app.listen(3000)