

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    userTypes: ["买家", "卖家"],
    url: 'http://localhost:8080/raisehot/user/'
  },
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    var url = that.data.url;
    var list;
    wx.request({
      url: url + 'useruanager.do',
      data: {},
      //JSON.stringify(obj), 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res);
        list = res.data;
        for (var i = 0; i < list.length; i++) {
          list[i].userType = that.data.userTypes[list[i].userType];
        }
        console.log("展示数据"),
          that.setData({
            list: list
          })
        wx.setStorageSync('userlist', list)
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
  onShow: function () {
    var that = this//不要漏了这句，很重要
    var url = that.data.url;
    var list;
    wx.request({
      url: url + 'useruanager.do',
      data: {},
      //JSON.stringify(obj), 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res);
        list = res.data;
        for (var i = 0; i < list.length; i++) {
          list[i].userType = that.data.userTypes[list[i].userType];
        }
        console.log("展示数据"),
          that.setData({
            list: list
          })
        wx.setStorageSync('userlist', list)
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
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  kindToggle: function (e) {
    var list = wx.getStorageSync("tesks");
    for (var i = 0, len = list.length; i < len; ++i) {

    }
    this.setData({
      list: list
    });
  },
  register: function () {
    wx.navigateTo({
      url: 'register/register'
    })
  }


});