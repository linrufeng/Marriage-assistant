// components/calendar/calendar.js
let dateFn = require("./date.js");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:String
  },
  /**
   * 组件的初始数据
   */
  data: {
    currdate:'2018-11-02',
    //开始日期
    starDate: '2018-8-1',
    //结束日期
    endDate: '2018-12-31',
    //当前显示的年  内部 变量
    curYear:'',
    //显示当前的月  内部 变量
    curMonth:'',
    //星期 数组  内部 变量
    week: dateFn.week,
    //存放日期的数组对象 内部 变量
    monthArys:[],
    //内部数据 年 月 
    yma:[],
    //内部变量 当前的焦点
    curIndex:0,
  },
  // 日期 数组对象处理
  riqi(){
    //当前月 第一天位置
    //当前月 总天数
    //数组补足
  },
  ready(){
    //初始化 月份数组
    this.monthArry();
    // 初始化当前月
    this.initym();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 初始化年月
     */
    initym(){
      let cur = this.data.currdate.split('-');
      this.setData({
        curYear: cur[0],       
        curMonth: cur[1],
      })
    },
    //日期堆积 是否可以从 cur 开始 左右堆积呢？
    /**
     *  堆积规则 cur 前 1月 或当前月 然后向后堆积2位或1位?
     * 
     */
    monthArry(){
      let star = this.data.starDate.split('-');
      let end = this.data.endDate.split('-');      
      let starY = star[0],starM = star[1];
      let endY = end[0],endM = end[1];
      let run = true;
      let allMonth = [];
      let yma = [];
      while (run){
        let temp = starY +'-'+ starM;  
        yma.push(temp);
        allMonth.push(dateFn.canlerdays(temp)); 
        if (starY == endY && starM == endM) {
          run = false;
        }       
        starM++;
        if (starM>12){
          starM = 1;
          starY++;
        }  
      }
      console.log(allMonth, yma)
      this.setData({
        monthArys: allMonth,
        yma: yma
      })
    },
    //选择日期
    curChose(e){      
      let data = e.currentTarget.dataset;
      let curIndex = this.data.curIndex;
      let dataLength = this.data.monthArys.length-1;      
      if(data.state=="per"){
        //前一个月        
        curIndex = curIndex - 1;       
        if (curIndex<0){
          return;
        }
      } else if (data.state == "next"){
        //后一个月 需要判断日历的数组对象长度 当最大时候 为 0 或 增加一段      
        curIndex = curIndex+1;
        if (curIndex>dataLength){
          //到头了
          return ;
        }       
      }   
      this.setData({
        curIndex: curIndex,
        currdate: data.day
      }) 
    },
    //滑动事件 发生
    changeMonth(e){
      
    },
    //滑动结束
    changeFinish(e){
      
      let index = e.detail.current;
      //滑动结束首先更新 curIndex 
      this.setData({
        curIndex: e.detail.current
      })
      //设置显示月      
      let calmonthArys = this.data.yma[index];
      if (calmonthArys){
        let firstD = calmonthArys.split('-');        
        this.setData({
          curYear: firstD[0],
          curMonth:firstD[1]
        })
      }
    }
  }
})
