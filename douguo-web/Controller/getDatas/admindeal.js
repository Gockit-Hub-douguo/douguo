const query = require('../mysql/getConn')
const { add } = require('./public')

console.log(add)
// 查询接口
function viewadmin (options){
    add(options)
    query({
        sql: 'select adindex,adminId,adminPhone,adminSex,adminGrade from admin_tab'
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}
// 添加接口
function addAdmin (options){
    add(options)
    query({
        sql: 'insert into admin_tab(adminId,adminPhone,adminSex,adminGrade) values(?,?,?,?)',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}


module.exports = {
    viewadmin,
    addAdmin
}