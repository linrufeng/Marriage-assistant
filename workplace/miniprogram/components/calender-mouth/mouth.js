// components/calender-mouth/mounth.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //开始年
    start:2018,
    //展示年的长度
    yearL:12,
    num:''
  },
  ready(){
    this.setYears()    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //设定年分
    setYears(){     
      let lengths = this.data.yearL;
      let years = [];
      for (let i = 0;i<lengths;i++){
        years.push(i)
      }
      this.setData({
        num:years
      })
    },
    //选择月
    choseMouth(e){
      console.log(e)
      let datas = e.currentTarget.dataset;
    }
  },
  scroll: function (e) {
    console.log(e)
  },
})
