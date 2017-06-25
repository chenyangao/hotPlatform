// register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    countryIndex: 0,
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    isAgree: false
  },

  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示框
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
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

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this;
    var formData = e.detail.value;

    if (e.detail.value.user_no.length > 0 && e.detail.value.password.length > 0) {
      console.log('key:' + formData.user_no);
      wx.setStorage({
        key: formData.user_no,
        data: formData
      })
      this.setData({
        tip: '',
        showTopTips: false
      })
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
          that.modalTap();
        }
      })
    } else {
      this.setData({
        tip: '用户名和密码不能为空！',
        showTopTips: true
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryIndex: e.detail.value
    })
  }

})