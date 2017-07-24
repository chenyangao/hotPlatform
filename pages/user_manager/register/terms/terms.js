//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    plist: [],
    url: 'http://localhost:8080/raisehot/user/',
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
    var url = that.data.url;
    wx.request({
      url: url+'preview.do',
      method: 'POST',
      data: {
        id: '338703203371581440'
      },
      header: {
         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  }
});
