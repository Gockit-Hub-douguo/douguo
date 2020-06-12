const mysql = require('mysql')
const config = {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  connectLimit: 20
}

const pool = mysql.createPool(config)

console.log(pool)
