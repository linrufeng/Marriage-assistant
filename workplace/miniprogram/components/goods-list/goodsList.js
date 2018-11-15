// components/goods-list/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      { 
        id:'001',        img:'http://img30.360buyimg.com/uba/jfs/t20131/270/2071616301/436213/6feb0bee/5b45b861Nc6cfe518.png',       
        title:'心动99手捧花',
        stitle:'买就送价值10元表白玫瑰',
        price:"99.99",
        score:"5.0",
        stock:1000
        
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //加清单 msg good id
    addShopCar(e){
      this.triggerEvent('addList',e,'加清单')
    },
    //购买 msg good id
    buy(e){
      console.log('1')
      this.triggerEvent('buy',e,'购买')
    }
  }
})
