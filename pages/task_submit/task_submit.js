var util = require('../../utils/util.js')
// task_submit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tasks: [],
    showTopTips: false,
    radioItems: [
      { name: '电脑单', value: '0', checked: true },
      { name: '手机单', value: '1' },
      { name: '秒单', value: '2' }
    ],
    radioItems2: [
      { name: '单', value: '0', checked: true },
      { name: '双', value: '1' }
    ],
    checkboxItems: [
      { name: '白号', value: '0', checked: true },
      { name: '一星', value: '1' },
      { name: '二星', value: '2' },
      { name: '三星', value: '3' },
      { name: '四星', value: '4' },
      { name: '五星', value: '5' },
      { name: '一钻', value: '6' },
      { name: '二钻', value: '7' },
      { name: '三钻', value: '8' },
      { name: '四钻', value: '9' },
      { name: '五钻', value: '10' },
      { name: '一冠', value: '11' },
      { name: '二冠', value: '12' }
    ],
    taskTimeRadioItems: [
      { name: '不过滤', value: '0', checked: true },
      { name: '十五天内接过不要', value: '1' },
      { name: '二十天内接过不要', value: '2' },
      { name: '三十天内接过不要', value: '3' }
    ],
    comparativeOptRadioItems: [
      { name: '不货比', value: '0', checked: true },
      { name: '货比一家', value: '1' },
      { name: '货比二家', value: '2' },
      { name: '货比三家', value: '2' },
      { name: '货比四家', value: '2' },
      { name: '货比五家', value: '3' }
    ],
    favoritesOptRadioItems: [
      { name: '不收藏', value: '0', checked: true },
      { name: '收藏', value: '1' }
    ],
    chatOptRadioItems: [
      { name: '不假聊', value: '0', checked: true },
      { name: '假聊', value: '1' }
    ],
    showTopTips: false,
    jobTypes: [{ name: '电脑单', value: '0', checked: true },
    { name: '手机单', value: '1' },
    { name: '秒单', value: '2' }],
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    linkTypes: [
      { name: '单', value: '0', checked: true },
      { name: '双', value: '1' }
    ],
    jobTypesIndex: 0,
    linkTypesIndex: 0,
    taskTimeIndex: 0,
    comparativeOptIndex: 0,
    favoritesOptIndex: 0,
    chatOptIndex: 0,
    isAgree: false,
    isdisabled:true
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

  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindJobTypesChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      jobTypesIndex: e.detail.value
    })
  },
  bindlinkTypesChange: function (e) {
    console.log('picker bindlinkTypesChange 发生选择改变，携带值为', e.detail.value);
    this.setData({
      linkTypesIndex: e.detail.value
    })
  },
  bindtaskTimeChange: function (e) {
    console.log('picker bindtaskTimeChange 发生选择改变，携带值为', e.detail.value);
    this.setData({
      taskTimeIndex: e.detail.value
    })
  },
  bindComparativeOptChange: function (e) {
    console.log('picker comparativeOpt 发生选择改变，携带值为', e.detail.value);
    this.setData({
      comparativeOptIndex: e.detail.value
    })
  },
  bindfavoritesOptChange: function (e) {
    console.log('picker favoritesOpt 发生选择改变，携带值为', e.detail.value);
    this.setData({
      favoritesOptIndex: e.detail.value
    })
  },
  bindChatOptChange: function (e) {
    console.log('picker bindChatOptChange 发生选择改变，携带值为', e.detail.value);
    this.setData({
      chatOptIndex: e.detail.value
    })
  },
  formSubmit:function (e) { 
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this;
    var formData = e.detail.value; 
      wx.showModal({
        title: '确定注册',
        content: '注册后充值保证金后方可发单、接单！',
        confirmText: "确定",
        cancelText: "取消",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('确定')
            var id = Date.now().toString();
            formData.id = id;
            var tasks = wx.getStorageSync('tasks') || []
            tasks.unshift(formData)
            wx.setStorageSync('tasks', tasks)
            wx.setStorage({
              key: id,
              data: formData,
              success: function (res) {
                console.log('异步保存成功')
              }
            })
            wx.showToast({
              title: '发布成功',
              icon: 'success',
              duration: 3000
            });
            wx.navigateTo({
              url: '/pages/index/index'
            });
            wx.request({
              url: 'http://localhost:8080/mvc/postJson',
              data: formData,
              //JSON.stringify(obj), 
              method: 'POST',
              header: {
                //'Content-Type': 'application/json'
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              success: function (res) {
                console.log(res.data);
              }
            })

  
          } else {
            console.log('取消')
          }
        }
      });

    } ,

  formReset: function () {
    console.log('form发生了reset事件');
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
    this.setData({
      isdisabled: !this.data.isAgree
    })
    console.log(e.currentTarget.dataset.text);
  },

})