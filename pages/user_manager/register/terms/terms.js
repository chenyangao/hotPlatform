//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    plist: []
  },
  onLaunch: function () {
    console.log('index Launching ...');
  },
  onShow: function () {
    var that = this;

    setInterval(function () {
      that.intervalMonit();
    }, 5000);
  },
  go: function (e) {
    wx.navigateTo({
      url: '../detail/detail?index=' + e.currentTarget.id
    });
  },
  intervalMonit: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/mvc/postJson',
      method: 'POST',
      header: {
         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  }
});
