// 云函数入口文件 购买按钮 生成 填单页 数据 
// 创建购物 清单列表 如果没有确认订单按钮 则在购物里面保留 
const cloud = require('wx-server-sdk')
cloud.init({ env: 'hunli-bc3d13' })
const db = cloud.database()
// 云函数入口函数
 //通过id 查找数据  

exports.main = async (event, context) => {
  //
  // let param = event.data;
  // //验证数据信息准确性
  // //通过id 查找数据  
  let good = await db.collection('goods').where({
    "_id": event.id
  }).get();
   console.log(good)
  // //查看该用户是否有该id 如果有 则 在原来基础上数量加1
  
  // //把查到的数据加入购物清单 obj usrid 
  return db.collection(event.openid).add({
    data: good
  })
  //return event;
}