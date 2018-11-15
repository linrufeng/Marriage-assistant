// miniprogram/pages/good-class/good C la s s.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[]
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
    let _that = this;
    wx.cloud.callFunction({
      name: 'getGoods',
      data: {
        type: 'flower'
      },
      complete: res => {              
        _that.setData({
          goods: res.result.data
        })
      }
    })    
  },
  //点击购买
  buyevent(res){
    let _that = this;
    let data = res.detail.currentTarget.dataset.id;
    let openid = app.globalData.openid;
    console.log(openid)
    console.log( openid)
    wx.cloud.callFunction({
      name: 'buyGoods',
      data: {
        id: data,
        openid: openid
      },
      complete: res => {
        console.log(res,'加入订单')
      }
    }) 
    //添加 清单
  },
  //点击 加清单
  addListevent(res){
    let data = res.detail.currentTarget.dataset.id;
    console.log(res,data)
    //添加清单
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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

  }
})