// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTo() {
      console.log(1)
      wx.navigateTo({
        url: '/components/calendar/calendarDate',
      })
    }
  }
})
