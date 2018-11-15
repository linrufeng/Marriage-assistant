//app.js
App({

  globalData: {},
  onLaunch: function () {
   
    //获取用户权限  
    this.getUserbase();
    this.getuser()
    
  },
  getUserbase(){
    let _that = this;
    return new Promise((resolev, reject)=>{
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function (res) {
                _that.globalData.userInfo = res.userInfo;
                resolev(res.userInfo);
              }
            })
          }

        },
        fail: res => {
          //接口不通
          console.log(res, 'ok')
        }
      })
    })
   
  },
  //获取用户id
  getuser(){
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      },res=>{
        console.log(res)
      })
    }
    // wx.cloud.callFunction({
    //   name: 'getuserMsg',
    //   complete: res => {
    //     console.log(res)
    //     this.globalData.openid = res.result.OPENID;
    //     this.creatSer()
    //   }
    // })
    // wx.cloud.init()
  
  },
  //创建数据库
  creatSer(){
    wx.cloud.callFunction({
      name: 'creatNewuser',
      complete: res => {
        console.log('云函数测试', res)
      }
    })
  }
})
