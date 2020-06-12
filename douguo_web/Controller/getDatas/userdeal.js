const query = require('../mysql/getConn')
const { add } = require('./public')

// 查询接口
function viewuser (options){
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
function adduser (options){
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

// 删除数据
function deleteuser (options){
    add(options)
    query({
        sql: 'delete from admin_tab where adminId = ?',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}

// 修改数据
function updateuser (options){
    add(options)
    query({
        sql: 'update admin_tab set setadminId=?,adminPhone=?,adminSex=?,adminGrade=? where setadminId = ?',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}


module.exports = {
    viewuser,
    adduser,
    deleteuser,
    updateuser
}