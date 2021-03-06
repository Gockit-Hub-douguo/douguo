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

// 用户信息完善
function userupload(options){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/frontupuser', // 访问地址 api是代理服务地址 api = http://192.168.85.248:3000/
            type: 'post', // 访问方式
            data: options.data
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

//
function getseesionu(options){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/getsessioninfo' // 访问地址 api是代理服务地址 api = http://192.168.85.248:3000/  
        }).then((data)=>{
            resolve(data.data.lists)
        }).catch((err)=>{
            reject(err)
        })
    })
}
module.exports = {
    regist,
    userupload,
    getseesionu
}