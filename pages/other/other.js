var appInstance=getApp()
console.log(appInstance.globalData)

/**
 * 页面加载数据，需要有Page()构造器
 */
Page({
  // 2021-03-10
  

  /**
   * 页面的初始数据
   */
  data: {
    // let res;
  },

  /**
   * 2021-03-10
   * @param {*} e 
   */
  test_http: function(e) {
    let id = 187558199999;
    const that=this;
    var str_result='';
    var hasClick = false;
    if (hasClick){return}
    hasClick=true;
    wx.showLoading()
    wx.request({
      url: 'https://api-test.renyihealth.com/his/api/public/platformPublicAffairs/whetherPublicAffairs',
      method:'GET',
      data:{
        storeId:id
      },
      header:{'content-type':'application/json',
      'cookie':'login=patient-system; access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlvbklkIjpudWxsLCJ1c2VyX25hbWUiOiJ6ZHFoMTIzIiwicm9sZXMiOiJbXSIsImJ1c2luZXNzSWQiOiI5OTk5OSIsInR5cGUiOiIxIiwidXNlcklkIjoiNDQ5MjgxMjc3NTk5OTk5IiwiY2xpZW50X2lkIjoid2ViX2FwcCIsInBob25lIjoiMTM1ODE5OTc4NzEiLCJzY29wZSI6WyJvcGVuaWQiXSwibG9naW5OYW1lIjoiemRxaDEyMyIsIm5hbWUiOm51bGwsImV4cCI6MTYxNzAyMjg5NCwianRpIjoiNzkwMzljMzMtNDcxMy00MDQ2LTliMWYtMDJjMDUwYjBmMTA1Iiwic3RhdHVzIjoiNyJ9.AnFNf1H-_Andv7pfKFELPssU5dOzSnsqtuC4bJ56Xj-vkxjw6zgrnC7fwi2gSaypETh6nw6JsnKB6lrix_j1U-JcG1dBo_ANI-tVLpQ3BVu41Bsc715Lh43pzYOLAxTsMaeq5DDCT4bzMQb8MjU34wc6Y8lc22NUEyZf8MJnx1_IekysPA5HytdObpPVx6-MgqwxpU1RuAbtKGlSjzVOLmg6lLjJPGhWKWN4-dW93SHHjWBiPKyh6HOCpwe0UTK23FnVALAJhRDB5dXDDwla9GZqShYxA-PPj6sMambqEQLZmCnxNwepDoreopjsyJKdZCLOv4KFrrRXi9Gid75Rgg; refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlvbklkIjpudWxsLCJ1c2VyX25hbWUiOiJ6ZHFoMTIzIiwicm9sZXMiOiJbXSIsImJ1c2luZXNzSWQiOiI5OTk5OSIsInR5cGUiOiIxIiwidXNlcklkIjoiNDQ5MjgxMjc3NTk5OTk5IiwiY2xpZW50X2lkIjoid2ViX2FwcCIsInBob25lIjoiMTM1ODE5OTc4NzEiLCJzY29wZSI6WyJvcGVuaWQiXSwiYXRpIjoiNzkwMzljMzMtNDcxMy00MDQ2LTliMWYtMDJjMDUwYjBmMTA1IiwibG9naW5OYW1lIjoiemRxaDEyMyIsIm5hbWUiOm51bGwsImV4cCI6MTYxOTU3NjY3NSwianRpIjoiYTAwNTlhZDItNDJhMy00NzM5LWI0YWQtZmE0NmFiMzlkMzIxIiwic3RhdHVzIjoiNyJ9.pABOxbAd1JUG8laHV0yxOnEpUM3cz9ueE8TDWknyjvt15dLlU1iD2lGjXieAVSGiD1J4rBn-Go2x9R9DWUYHGgPirUauFVMo87sZQHNl8N8u7oJx4GMa8bF06gqNpA_Reie6J_7M24-HwAxTNcbUcysVLfNC_zU_ghkNZuBP00CQpRh07B3xMiQcmQtlKZ0DYKSq0C4YrvYqPoQRVuE62kfo7hZ0GWWH6ykFP0AwaEFEAUElGJ8EAnlxirVVLfihb-KeJnzxxoZLWpCUVExe166XjKFzDn-QsPm5xzSJSCbhhTcpkT7nqtK4tQ-vx-awaJSLqWZgj17VMWvuVXwFiA; XSRF-TOKEN=ca414f2a-e7c2-4854-946f-bad6f1b6ccdf'
    },
      success:function(res) {
        if (res.statusCode===200){
          console.log(res)
          console.log(typeof(res.data))
          that.setData({
            obj:res.data,
            /**
             * JSON对象 ==> String: JSON.stringify(JsonObject);
             * String ==> JSON对象: JSON.parse(String);
             */
            str_result:JSON.stringify(res.data)
          })
        }
      },
      fail:function(res) {
        console.log("http failed")
      },
      complete:function(res){
        wx.hideLoading({
          success: (res) => {},
        })
        hasClick=false;
      }
    }),
    wx.hideLoading({
      success: (res) => {},
    })
    this.setData({
      // 注释掉，就没有 ReferenceError: res is not defined 的报错了，暂时没找到原因
      // 可能是因为该方法在res的定义范围外，故调用的时候发现res未初始化
      // result:res.data 
    })
  },

  third_page:function(e){
    wx.navigateTo({
      url: '/pages/flex/flex',
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