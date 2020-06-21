const query = require('../indexh')
function login(options){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/login',// 访问地址
            type: 'post',// 访问方式
            data: options.data 
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = {
    login
}