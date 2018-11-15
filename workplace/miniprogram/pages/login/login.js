// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取用户信息
    wx.getSetting({
      success:res=>{
        //获取接口的授权状态
        console.log(res,'ok')
      },
      fail:res=>{
        //接口不通
        console.log(res,'ok')
      },
      complete:res=>{
        console.log(res,'com')
      }
    })
    //授权设置弹框
    wx.authorize({
      scope: 'scope.address',
      success() {
        //
       // wx.startRecord()
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {     
    //查询数据库测试 成功 获取 openid 
    // wx.cloud.callFunction({
    //   name: 'creatNewuser',    
    //   complete: res => {
    //     console.log('云函数测试', res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
})