// task_detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: ["白号", "一星", "二星", "三星", "四星", "五星", "一钻", "二钻", "三钻", "四钻", "五钻", "一冠", "二冠"],
    taskTimeRadioItems: ["不过滤", "十五天内接过不要", "二十天内接过不要", "三十天内接过不要"],
    comparativeOptRadioItems: ["不货比", "货比一家", "货比二家", "货比三家", "货比四家", "货比五家"],
    favoritesOptRadioItems: ["不收藏", "收藏",],
    chatOptRadioItems: ["不假聊", "假聊"],
    jobTypes: ["电脑单", "手机单", "秒单"],
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    linkTypes: ["单", "双"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var task = wx.getStorageSync(options.id);
    task.jobType = this.data.jobTypes[task.jobType];
    task.linktype = this.data.linkTypes[task.linktype];

    var userLevels = task.userLevel;
    for (var i = 0; i < userLevels.length; i++) {
      task.userLevel[i] = this.data.checkboxItems[i];
    }
    task.taskTime = this.data.taskTimeRadioItems[task.taskTime];
    task.comparativeOpt = this.data.comparativeOptRadioItems[task.comparativeOpt];
    task.favoritesOpt = this.data.favoritesOptRadioItems[task.favoritesOpt];
    task.chatOpt = this.data.chatOptRadioItems[task.chatOpt];
    task.goldCoinCount = (parseInt(task.goldCoinSum) + parseInt(task.advancePrincipal) + parseInt(task.additionalPrincipal)) * parseInt(task.taskCount);
    that.setData({
      task: task
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