/** 美食系列 */
var way = require('./public.js')
var msq = require('../mysql/common.js')
var formidable = require('formidable')
var path = require('path')
var stringrandom = require('string-random')


function GetSetBaking(req, res) { // 烘焙
  let paramsobj = way.getparams(req);
  way.paramsekey(paramsobj, function(rtn) {
      if(rtn){
          msq.sqbaking(paramsobj.uid, function(reslut){
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

function GetSetCake(req, res) { // 蛋糕
  let paramsobj = way.getparams(req);
  way.sqcake(paramsobj, function(rtn) {
      if(rtn){
          msq.sqbaking(paramsobj.uid, function(reslut){
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

function GetSetSandwich(req, res) { // 三明治
  let paramsobj = way.getparams(req);
  way.paramsekey(paramsobj, function(rtn) {
      if(rtn){
          msq.sqsandwich(paramsobj.uid, function(reslut){
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

function PostAddFineFood(req, res) {// 新增美食系列
  let from = new formidable.IncomingForm();
  from.uploadDir = "./uploadImg/xbk/finefood/";
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
          let oldPath = './uploadImg/xbk/finefood/'+filobj.base
          let newname = way.newFilename() + extname// 新文件名
          let newPath = './uploadImg/xbk/finefood/' + newname
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
              if(lab.length == 6){
                // 参数不符合要求 删除文件
                way.deleatefile(newPath, function(rtn){
                  res.json({
                    staus: 416,
                    message: '网络连接不稳定，请稍后重试'
                  })
                })
              }else{
                msq.addfinefood(lab, function(reslut){
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

module.exports = {
  GetSetBaking,
  GetSetCake,
  GetSetSandwich,
  PostAddFineFood
}