// 云函数入口文件 查询数据库  接受 type,用于分类
const cloud = require('wx-server-sdk');
cloud.init({ env:'hunli-bc3d13'})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let type =event.type || "";
  // db.createCollection(OPENID).then(res=>{
  //  return console.log(res,"创建集合")
  // },err=>{
  //   console.log(err,'创建集合')
  // })
  return db.collection('goods').where({
    "type": type
  }).get()
}