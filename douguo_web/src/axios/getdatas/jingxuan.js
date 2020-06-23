const query = require('../indexh')
function getworkslist(){
    return new Promise((resolve,reject)=>{
        query({
            url: 'api/getworks'
        }).then((data)=>{
            resolve(data.data.worksList)
        }).catch((err)=>{
            reject(err)
        })
    })
}
module.exports = {
    getworkslist
}