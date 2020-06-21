const query = require('../indexh')

function pushcaipu(options){
    return new Promise((resolve, reject)=>{
        query({
            url: 'http://127.0.0.1:3000/getgoods'
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}


module.exports = {
    pushcaipu
}