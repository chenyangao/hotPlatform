

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    checkboxItems: ["白号", "一星", "二星", "三星", "四星", "五星", "一钻", "二钻", "三钻", "四钻", "五钻", "一冠", "二冠"],
    taskTimeRadioItems: ["不过滤", "十五天内接过不要", "二十天内接过不要", "三十天内接过不要"],
    comparativeOptRadioItems: ["不货比", "货比一家", "货比二家", "货比三家", "货比四家", "货比五家"],
    favoritesOptRadioItems: ["不收藏", "收藏",],
    chatOptRadioItems: ["不假聊", "假聊"],
    jobTypes: ["电脑单", "手机单", "秒单"],
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    linkTypes: ["单", "双"],
  },
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    console.log("加载数据"),
      that.setData({
        list: wx.getStorageSync("tasks"),
      })
  },
  onShow: function () {
    var that = this//不要漏了这句，很重要
    var list = wx.getStorageSync("tasks");
    for (var i = 0; i < list.length; i++) {
      list[i].jobType = this.data.jobTypes[list[i].jobType];
      list[i].linktype = this.data.linkTypes[list[i].linktype];

      var userLevels = list[i].userLevel;
      for (var j = 0; j < userLevels.length; j++) {
        list[i].userLevel[j] = this.data.checkboxItems[j];
      }
      list[i].taskTime = this.data.taskTimeRadioItems[list[i].taskTime];
      list[i].comparativeOpt = this.data.comparativeOptRadioItems[list[i].comparativeOpt];
      list[i].favoritesOpt = this.data.favoritesOptRadioItems[list[i].favoritesOpt];
      list[i].chatOpt = this.data.chatOptRadioItems[list[i].chatOpt];
      list[i].goldCoinCount = parseInt(list[i].goldCoinSum) + parseInt(list[i].advancePrincipal) + parseInt(list[i].additionalPrincipal);
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