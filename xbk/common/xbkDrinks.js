var way = require('./public.js')
var msq = require('../mysql/common.js')
var formidable = require('formidable')
var path = require('path')
var fs = require('fs')
var stringrandom = require('string-random')

function GetSetIcetune(req, res) { // 玩味冰调查询
    let paramsobj = way.getparams(req);
    way.paramsekey(paramsobj, function(rtn) {
        if(rtn){
            msq.sqdrinks(paramsobj.uid, function(reslut){
                res.json(reslut)
            })
        }else{
            res.json({
                staus:403,
                message:'该请求不安全！！'
            })
        }
    })
}

function PostAddIcetune(req, res) {// 新增饮料系列
  let from = new formidable.IncomingForm();
  from.uploadDir = "./uploadImg/xbk/yinp/";
  from.keepExtensions = true
  // 解析表单
  from.parse(req, function(err, lab, file){
    if(err){
      res.json({
        staus: 416,
        message: '网络连接不稳定，请稍后重试'
      })
    }else{
      // 参数安全验证
      way.paramsekey(lab, function(rt){
        if(rt){ 
          // 更新文件名
          var filobj = path.parse(file.img.path);
          let extname = filobj.ext // 后缀名
          let oldname = filobj.name // 原文件名
          let oldPath = './uploadImg/xbk/yinp/'+filobj.base
          let newname = way.newFilename() + extname// 新文件名
          let newPath = './uploadImg/xbk/yinp/' + newname
          way.rename(newPath, oldPath, function(rtf){
            if(rtf == -1){
              // 文件删除处理
              way.deleatefile(oldPath, function(rtn){
                res.json({
                  staus: 500,
                  message: '网络连接不稳定，请稍后重试'
                })
              })
            }else{
              // 图片，信息存储
              let id = stringrandom(16, { letters: false }) // 随机16位数字id
              lab['Icetune_imgurl'] = newPath
              lab['Icetune_id'] = id
              if(lab.length == 8){
                // 参数不符合要求 删除文件
                way.deleatefile(newPath, function(rtn){
                  res.json({
                    staus: 416,
                    message: '网络连接不稳定，请稍后重试'
                  })
                })
              }else{
                msq.addrinks(lab, function(reslut){
                  res.json(reslut)
                })
              }
            }
          })
        }else{
          res.json({
            staus: 403,
            message: '参数不合法！'
          })
        }
      },1)
    }
  })
}

function GetSetEspresso(req, res) { // 浓缩咖啡
  let paramsobj = way.getparams(req);
  way.paramsekey(paramsobj, function(rtn) {
      if(rtn){
          msq.espresso(paramsobj.uid, function(reslut){
              res.json(reslut)
          })
      }else{
          res.json({
              staus:403,
              message:'该请求不安全！！'
          })
      }
  })
}

function GetSetStar(req, res) { // 星冰乐
  let paramsobj = way.getparams(req);
  way.paramsekey(paramsobj, function(rtn) {
      if(rtn){
          msq.star(paramsobj.uid, function(reslut){
              res.json(reslut)
          })
      }else{
          res.json({
              staus:403,
              message:'该请求不安全！！'
          })
      }
  })
}

function GetSetTea(req, res) { // 茶瓦纳
  let paramsobj = way.getparams(req);
  way.paramsekey(paramsobj, function(rtn) {
      if(rtn){
          msq.tea(paramsobj.uid, function(reslut){
              res.json(reslut)
          })
      }else{
          res.json({
              staus:403,
              message:'该请求不安全！！'
          })
      }
  })
}

module.exports = {
    GetSetIcetune,
    PostAddIcetune,
    GetSetEspresso,
    GetSetStar,
    GetSetTea
}