// components/foot-bar/footBar.js
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
    cur:0,
    links:[
      {
        link:'/pages/home/home',
        cm:'../../images/home.svg',
        cr:'../../images/home1.svg',
        name:'首页'
      },
      {
        link: '/pages/good-class/goodClass',
        cm: '../../images/class.svg',
        cr: '../../images/class1.svg',
        name: '分类'
      },
      {
        link: '/pages/myshopcar/myshopcar',
        cm: '../../images/goods.svg',
        cr: '../../images/goods1.svg',
        name: '购物车'
      },
      {
        link: '/pages/center/my',
        cm: '../../images/my.svg',
        cr: '../../images/my1.svg',
        name: '我'
      }
    ]
  },
  ready(){    
    let route = getCurrentPages();   
    let url = route[route.length - 1].route;
    let urls = this.data.links;
    for (let i = 0, item; item = urls[i];i++){
      if (item.link.indexOf(url)>-1){   
        this.setData({
          cur:i
        })
        return;
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    chose(e){
      console.log(e)
      let set = e.currentTarget.dataset;
      this.setData({
        cur:set.index
      })
    }
  }
})
