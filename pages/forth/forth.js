// pages/forth/forth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // code:'',
    
  },

  tapLogin:function() {
    const that=this;
    var js_code='';
    var secret='6524dd0ec2930707d00af8baf3945fee';
    var appid='wx0a2b529fee7e77ce';
    wx.login({
      success:function(res) {
        if(res.code){
          console.log(res)
          that.setData({
            code:res.code
          })
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method:'GET',
            data:{
              appid:appid,
              secret:secret,
              js_code:code
            },
            success:function(res) {
              if(res.statusCode===200){
                console.log(res.openid)
              }
            }
          })
        }
      }
      // timeout: 200,
    })
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