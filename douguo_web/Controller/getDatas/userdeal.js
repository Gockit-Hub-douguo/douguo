const query = require('../mysql/getConn')
const { add } = require('./public')

// 查询接口
function viewuser (options){
    options = add(options)
    query({
        sql: 'select phonenumber,password,username,userSex,userFans,userClass from user_tab'
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}
// 添加接口
function adduser (options){
    console.log(options)
    options = add(options)
    console.log(options)
    query({
        sql: 'insert into user_tab(phonenumber,username,password,userSex) values(?,?,?,?)',
        data: options.data
    }).then((result)=>{
        options.success(result)
    }).catch((error)=>{
        options.Error(error)
    })
}

// 删除数据
function deleteuser (options){
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
function updateuser (options){
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
adduser({
    data: ['129', '1237@werr', '警察', 0],
    success: (res)=>{
        console.log(res)
    }
})
module.exports = {
    viewuser,
    adduser,
    deleteuser,
    updateuser
}