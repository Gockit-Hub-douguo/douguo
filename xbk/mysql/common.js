var mquery = require('./mysql.js')

function sqdrinks (params, calback){ // 玩味冰调
    let sql = '';    
    if(params == '1'){
        sql = 'select * from Icetune'
    }else if(params == 2){
      sql = 'select * from Icetune where Icetune_home = 1'
    } else {
        sql = 'select * from Icetune where Icetune_id = "'+params+'"'
    }
    mquery(sql).then(function(reslut){
        calback({
            status: 200,
            list: reslut
        })
    }).catch(function(er){
        calback({
            status: 500,
            message: '网络波动，不稳定，请稍后重试'
        })
    })
}

function addrinks (params, calback){ // 新增饮品系列
  let table = sqswitch(params.sort)
  let sql = `insert into ${table} VALUES ("${params.Icetune_id}","${params.Icetune_imgurl}","${params.name}","${params.preste}")`;
  console.log(sql)
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          message: '商品添加成功咯'
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function espresso (params, calback){ // 浓缩咖啡
  let sql = '';
  if(params == '1'){
      sql = 'select * from Espresso'
  }else if(params == 2){
    sql = 'select * from Espresso where Espresso_home = 1'
  } else {
      sql = 'select * from Espresso where Espresso_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function star (params, calback){ // 星冰乐
  let sql = '';
  if(params == '1'){
      sql = 'select * from Star'
  }else if(params == 2){
    sql = 'select * from Star where Espresso_home = 1'
  } else {
      sql = 'select * from Star where Espresso_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function tea (params, calback){ // 茶瓦纳
  let sql = '';
  if(params == '1'){
      sql = 'select * from Tea'
  }else if(params == 2){
    sql = 'select * from Tea where Espresso_home = 1'
  } else {
      sql = 'select * from Tea where Espresso_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function sqswitch (ix) { // sql语句筛选
  let arname = ['Icetune', 'Espresso', 'Star', 'Tea'] // 饮品系列
  let aname = ['玩味冰调', '浓缩咖啡', '星冰乐', '茶瓦纳']
  let tablename = '';
  aname.forEach(function(item, index) {
    if(item == ix){
      tablename= arname[index]
    }
  })
  return tablename
}

// 美食系列

function sqbaking (params, calback){ // 烘焙
  let sql = '';    
  if (params == '1') {
      sql = 'select * from Baking'
  } else {
      sql = 'select * from Baking where Baking_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function sqcake (params, calback){ // 蛋糕
  let sql = '';    
  if (params == '1') {
      sql = 'select * from Cake'
  } else {
      sql = 'select * from Cake where Cake_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function sqsandwich (params, calback){ // 三明治
  let sql = '';    
  if (params == '1') {
      sql = 'select * from Sandwich'
  } else {
      sql = 'select * from Sandwich where Sandwich_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function addfinefood (params, calback){ // 新增美食系列
  let table = sqfswitch(params.sort)
  let sql = `insert into ${table} VALUES ("${params.Icetune_id}","${params.Icetune_imgurl}","${params.name}","${params.preste}"})`;
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          message: '商品添加成功咯'
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function sqfswitch (ix) { // sql语句筛选
  let arname = ['Baking', 'Cake', 'Sandwich'] // 饮品系列
  let aname = ['烘焙系列', '蛋糕系列', '三明治系列']
  let tablename = '';
  aname.forEach(function(item, index) {
    if(item == ix){
      tablename= arname[index]
    }
  })
  return tablename
}

// 咖啡产品

function sqmoderate (params, calback){ // 中度咖啡豆
  let sql = '';    
  if (params == '1') {
      sql = 'select * from Moderate'
  } else {
      sql = 'select * from Moderate where Moderate_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function sqdepth (params, calback){ // 深度咖啡豆
  let sql = '';    
  if (params == '1') {
      sql = 'select * from Depth'
  } else {
      sql = 'select * from Depth where Depth_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function addcoffee (params, calback){ // 新增咖啡产品
  let table = params.sort == '中度咖啡豆' ? 'Moderate' : 'Depth'
  let sql = `insert into ${table} VALUES ("${params.Icetune_id}","${params.Icetune_imgurl}","${params.name}","${params.preste}","${params.num}","${params.acid}","${params.alcohol}","${params.cd}","${params.functions}","${params.fwei}","${params.spjy}","${params.class}")`
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          message: '商品添加成功咯'
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

// 商品
function sqshoppingcg (params, calback){ // 中度咖啡豆
  let sql = '';    
  if (params == '1') {
    sql = 'select * from Shoppingcg where Shoppingcg_class =' + parseInt(params)
  } else if (params == '2') {
    sql = 'select * from Shoppingcg where Shoopingcg_class = ' + parseInt(params)
  } else {
    sql = 'select * from Shoppingcg where ShoppingcgModerate_id = "'+params+'"'
  }
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          list: reslut
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

function addshoping (params, calback){ // 新增商品
  let sql = `insert into Shoppingcg VALUES ("${params.Icetune_id}",${params.shopping_class},"${params.Icetune_imgurl}","${params.name}","${params.preste}")`;
  mquery(sql).then(function(reslut){
      calback({
          status: 200,
          message: '商品添加成功咯'
      })
  }).catch(function(er){
      calback({
          status: 500,
          message: '网络波动，不稳定，请稍后重试'
      })
  })
}

// 删除商品
function Deleteinfo (params, calback) { 
  let database = tablescreen(params.ascription)
  let sql = ` DELETE FROM ${database} WHERE ${database}_id = '${params.Shoppingkey}'`
  console.log(sql)
  mquery(sql).then(function(data){
    calback({
      status: 200,
      message: '商品删除成功！！'
    })
  }).catch(function(er){
    calback({
      status: 500,
      message: '商品删除失败！！'
    })
  })
}

// ascription
function tablescreen(tables){
  let mn = ['Icetune','Espresso','Star','Tea','Baking','Cake','Sandwich','Moderate','Depth','Shoppingcg']
  let mns = ['玩味冰调','浓味咖啡','星冰乐','茶瓦纳','烘焙','蛋糕','三明治','中度咖啡豆','深度咖啡豆','商品']
  let database = mn[mns.indexOf(tables)]
  return database
}

module.exports = {
    sqdrinks,
    addrinks,
    espresso,
    star,
    tea,
    sqbaking,
    sqcake,
    sqsandwich,
    addfinefood,
    sqmoderate,
    sqdepth,
    addcoffee,
    sqshoppingcg,
    addshoping,
    Deleteinfo
}