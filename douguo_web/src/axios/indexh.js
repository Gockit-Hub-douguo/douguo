const axios = require('axios')
const qs = require('qs')

function getdatas(options){
    if(options.type === 'get'){
        options.url = options.url + "?" + qs.stringify(options.data)
    }
    return options
}
// 封装axios方法 方法参数有 data数据 提交地址url 提交方式: method 字段
function axiosRequest(options){
    getdatas(options)
    return new Promise((resolve, reject)=>{
        axios({
            url: options.url,
            method: options.type || "get",
            data: options.data || {}
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = axiosRequest