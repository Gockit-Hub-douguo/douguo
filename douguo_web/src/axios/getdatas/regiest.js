const query = require('../indexh')
function regist(options){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/regist', // 访问地址 api是代理服务地址 api = http://192.168.85.248:3000/
            type: 'post', // 访问方式
            data: options.data
        }).then((data)=>{
            resolve(data.data.goods)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = {
    regist
}