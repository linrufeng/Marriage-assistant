const cloud = require('wx-server-sdk');
cloud.init({ env: 'hunli-bc3d13' });
// 云函数入口函数
exports.main = async (event, context) => {
 
  let { OPENID, APPID, UNIONID } = cloud.getWXContext() 
  return {
    OPENID: OPENID,
    APPID,
    UNIONID,
  }
}