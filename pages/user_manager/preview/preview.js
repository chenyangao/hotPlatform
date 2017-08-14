// preview.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: 'http://localhost:8080/raisehot/user/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this//不要漏了这句，很重要
    //var user = wx.getStorageSync(options.id);
    var url = that.data.url;
    var data = {id:options.id};
    wx.request({
      url: url + 'preview.do',
      data: data,
      //JSON.stringify(obj), 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res);
        var user = res.data;
        console.log("展示数据"),
          that.setData({
            user: user
          })
      },
      fail: function (res) {
        wx.showToast({
          title: '加载异常',
          icon: 'loading',
          duration: 3000
        });
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading'
    })
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