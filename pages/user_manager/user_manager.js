

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    userTypes: ["买家", "卖家"],
    linkTypes: ["单", "双"],
  },
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    console.log("加载数据"),
      that.setData({
      list: wx.getStorageSync("userlist"),
      })
  },
  onShow: function () {
    var that = this//不要漏了这句，很重要
    var list = wx.getStorageSync("userlist");
    for (var i = 0; i < list.length; i++) {
      list[i].userType = this.data.userTypes[list[i].userType];
      list[i].linktype = this.data.linkTypes[list[i].linktype];
 
    }
    console.log("展示数据"),
      that.setData({
        list: list
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
  }
});