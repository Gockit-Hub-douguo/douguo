// 数据库封装

var mysql = require('mysql')

// 连接池封装
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'xbk'
})

/**
 * 
 * @param {string} sql sql语句
 * @param {array} data 参递的执行参数
 */

function mquery(sql) {
    return new Promise(function(resolve, resject) {
        pool.getConnection(function(err, conntoion) {
            if(err){
                resject(err)
            }else{
                conntoion.query(sql, function(error, datas) {
                    if(error){
                        resject(error)
                    }else{
                        resolve(datas)
                    }
                })
            }
        })
    })
}

module.exports = mquery