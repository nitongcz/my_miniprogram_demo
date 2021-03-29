Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{loading:false},
    tap:function(){
      this.setData({
        loading:true
      })
    }
  },

  goTo4Page:function(){
    wx.navigateTo({
      url: '/pages/forth/forth',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({
    //   title: '已发送',
    //   icon:'success',
    //   duration:1500
    // })
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'标题',
      content:'告知当前状态，信息和解决办法',
      confirmText:'主操作',
      cancelText:'次要操作',
      success:function(res){
        if(res.confirm){
          console.log('用户点击主操作')
        }else if(res.cancel){
          console.log('用户点击次要操作')
        }
      }
    })
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
    console.log('用户操作了下拉动作')
    wx.stopPullDownRefresh({
      success: (res) => {
        wx.showToast({
          title: '下拉刷新完成',
          icon:'success',
          duration:1500
        })
      },
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("用户操作了“上拉”")
    wx.showToast({
      title: '上拉操作',
      icon:'success',
      duration:1500
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})