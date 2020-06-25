const query = require('../indexh')
function getgoodscomtianer(id){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/getgoodscomtianer',
            type: 'get',
            data: {
              id
            }
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