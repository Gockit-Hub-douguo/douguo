const query = require('../mysql/getConn')
const { add } = require('./public')

// 查询接口
function viewworks (options){
    options = add(options)
    query({
        sql: 'select * from works_tab'
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}
// 添加接口
function addworks (options){
    console.log(options)
    options = add(options)
    console.log(options)
    query({
        sql: 'insert into works_tab(works_imgId,works_title,works_title,creatTime) values(?,?,?,?)',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}

// 删除数据
function deleteworks (options){
    options = add(options)
    query({
        sql: 'delete from user_tab where phonenumber = ?',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}

// 修改数据
function updateworks (options){
    options = add(options)
    query({
        sql: 'update user_tab set phonenumber=?,password=?,username=?,userSex=?,userFans=?,userClass=? where phonenumber = ?',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}

module.exports = {
    viewworks,
    addworks,
    deleteworks,
    updateworks
}