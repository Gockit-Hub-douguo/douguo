const query = require('../indexh')
function getgoodslist(){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/getgoods'
        }).then((data)=>{
            resolve(data.data.goods)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = {
    getgoodslist
}