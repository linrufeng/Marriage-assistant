// 
/**
 * 用于小程序的入口
 * 本文件用于用户首次登陆注册 如果 已经登陆注册了就不会再次调用
 * 新的用户将会注册 老用户 返回 code:0
 */
const cloud = require('wx-server-sdk');
cloud.init({ env: 'hunli-bc3d13' })
const db = cloud.database()
//获取用户信息
const getid = async ()=>{
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()
  return {
    OPENID,
    APPID,
    UNIONID,
  }
}
//创建数据库
const creatD = async (str)=>{
  return db.createCollection(str)
}
// 云函数入口函数
exports.main = async (event, context) => {
  let users = await getid(); 
  return creatD(users.OPENID)
 // return 
}