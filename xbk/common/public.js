var url = require('url')
var path = require('path')
var querystring = require('querystring')
var stringrandom = require('string-random')
var fs = require('fs')
var md5 = require('./md5')

function getparams(req) { // 获取get请求参数以对象形式返回
    let obj = url.parse(req.url)
    obj = querystring.parse(obj.query)
    return obj
}

function datetime(){//时间 xxxx-xx-xx xx:xx:xx
    let myDate = new Date;
    let year = myDate.getFullYear(); //获取当前年
    let mon = myDate.getMonth() + 1; //获取当前月
    let date = myDate.getDate(); //获取当前日
    let h = myDate.getHours();//获取当前小时数(0-23)
    let m = myDate.getMinutes();//获取当前分钟数(0-59)
    let s = myDate.getSeconds();//获取当前秒
    let datatime = year+'-'+mon+'-'+date+' '+h+':'+m+':'+s;
    return datatime;
}

function newFilename(){ // 生成随机文件名 Ab_xxxxxxxxx
  let st = stringrandom(2, { numbers: false }); // 生成两个随机字母
  let myDate = new Date;
  let year = myDate.getFullYear(); //获取当前年
  let mon = myDate.getMonth() + 1; //获取当前月
  let date = myDate.getDate(); //获取当前日
  let h = myDate.getHours();//获取当前小时数(0-23)
  let m = myDate.getMinutes();//获取当前分钟数(0-59)
  let s = myDate.getSeconds();//获取当前秒
  let filename = st + '_' +year+mon+date+h+m+s
  return filename
}

function rename(newPath, oldPath,calback){ // 修改文件名
    fs.rename(oldPath, newPath,function(er){
        if(er){
            calback(-1)
        }else{
            calback(1)
        }
    })
}

function deleatefile(pathname, calback){ // 删除文件
    fs.unlink(pathname,function(er){
        if(er){
            calback(-1)
        }else{
            calback(1)
        }
    })
}

function paramsekey(paramse, calback, key = 0,) { // 参数接口验证
    let rtnstrig = /[`!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;//违禁字符
    let rtnstrig1 = /[`!@#$%^&*()\-+=<>?:"{}|;'\\[\]·~@#￥%……&*（）——\-+={}|《》？“”【】；‘’]/im;//违禁字符
    let ending = false
    if(key == 0){
      rtnstrig = rtnstrig
    }else{
      rtnstrig = rtnstrig1
    }
    // 判断参数是否包含违规字符 参数是否为空
    for(let i in paramse){
        if(rtnstrig.test(paramse[i]) == false && paramse[i].length != 0){
            // 参数是否包含时间戳和钥匙
            if(i == 'publicwords' && paramse[i].length == 32 && paramse.timegtime){
              // 获取时间戳并计算比对钥匙两者是否一致
                let keywod = (parseInt(paramse.timegtime) + 1000) * 2
                let keywods = md5(keywod)
                let f = paramse.publicwords == keywods ? true : false
                ending = f
            }
        }else{
            break;
        }
    }
    calback(ending)
}

module.exports = {
    getparams,
    datetime,
    rename,
    deleatefile,
    paramsekey,
    newFilename
}