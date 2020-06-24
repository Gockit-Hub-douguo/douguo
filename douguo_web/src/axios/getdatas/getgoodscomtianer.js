const query = require('../indexh')
function getgoodscomtianer(){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/getgoodscomtianer'
        }).then((data)=>{
            resolve(data.data.goods)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = {
    getgoodscomtianer
}