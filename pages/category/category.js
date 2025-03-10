// pages/category/category.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test_Lenth:'',
    height_Array:[{height:'150rpx', tips:1},{height:'150rpx', tips:1},{height:'150rpx', tips:1}],
    test01:{   //把具体内容嵌套在list01里面
      test_Color2:'#4285f4',
      list01:[{
        title_Name:'学习',
        real_Content:[{content:'学习一下123Aa222222222222222bsssdrfeeszzzzaaqqqqqqasfghh'},{content:'学c++898'},{content:'uaaohu'}]
      },{
        title_Name:'运动',
        real_Content:[{content:'学习一下123Aab'},{content:'学c++898'},{content:'uaaohu'}]
      },{
        title_Name:'生活',
        real_Content:[{content:'学习一下123Aab'},{content:'学c++898'},{content:'uaaohu'}]
      }]
    }
  },

  //跨页面异步传递
  send (){
    console.log("clicked");
    app.setChangedData("2")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let lenth=this.data.test01.list01.length
    if (app.globalData.primaryColor) {
      this.setData({
        primaryColor: app.globalData.primaryColor,
        test_Lenth:lenth
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let tabbar = this.getTabBar()   
    tabbar.setData({
      btn2: `color:${this.data.primaryColor}`,
     
    })
  },
  switch_Page:function(e){
    console.log(e)
  },
  zhankai:function(e){
    var n=e.currentTarget.dataset.xushu
    let tip=this.data.height_Array[n].tips
    let content_len=this.data.test01.list01[n].real_Content.length
    let gao=(content_len+1)*150
    
    let str = 'height_Array'+'['+n+']'+'.height'
    let str2 = 'height_Array'+'['+n+']'+'.tips'
    
    if(tip>0){
      this.setData({ 
        [str]:gao+'rpx',
        [str2]:-1
        })
    }else{
      this.setData({
        [str]:'150rpx',
        [str2]:1
    })
    }
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