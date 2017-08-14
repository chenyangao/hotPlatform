// register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    countries: ["北京", "上海", "广州", "重庆", "浙江", "江苏"],
    userTypes: ["买家", "卖家"],
    countryIndex: 0,
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    isAgree: false,
    isdisabled: true,
    phoneNumber: '',
    password: '',
    passwordAgain: '',
    url: 'http://localhost:8080/raisehot/user/',
    userTypesIndex: 0
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
    if (e.detail.value.phoneNumber.length > 0 && e.detail.value.password.length > 0) {
      console.log('key:' + formData.phoneNumber);
      that.setData({
        tip: '',
        showTopTips: false
      })
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
            var userlist = wx.getStorageSync('userlist') || []
            userlist.unshift(formData)
            wx.setStorageSync('userlist', userlist)
            wx.setStorage({
              key: id,
              data: formData,
              success: function (res) {
                console.log('异步保存成功'+res)
              }
            })
            wx.showToast({
              title: '信息提交中',
              icon: 'loading',
              duration: 3000
            });
            var url = that.data.url;
            wx.request({
              url: url + 'register.do',
              data: formData,
              //JSON.stringify(obj), 
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              success: function (res) {
                console.log('服务器保存成功' + res)
                console.log(res.data);
                wx.navigateTo({
                  url: 'msg_success/msg_success'
                });
              },
              fail:function(res){
                wx.navigateTo({
                  url: 'msg_fail/msg_fail'
                });
              }
            })
          } else {
            console.log('取消')
          }
        }
      });

    } else {
      this.setData({
        tip: '用户名和密码不能为空！',
        showTopTips: true
      })
    }
  },
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
  },
  getValidationCode: function (e) {
    var that = this;
    var url = that.data.url
    wx.request({
      url: url + 'sendmessage.do',
      data: { phoneNumber: phoneNumber },
      //JSON.stringify(obj), 
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      success: function (res) {
        console.log(res.data);
      }
    })
    console.log('getValidationCode携带数据为：', e.detail.value)
  },

  phoneNumberBlur: function (e) {
    this.data.phoneNumber = e.detail.value
  },
  passwordBlur: function (e) {
    var passwordValue = e.detail.value;
    if (passwordValue.length > 0) {
      this.data.password = e.detail.value
    }
    if (this.data.password.length > 0 && this.data.passwordAgain.length > 0) {
      if (this.data.password.password != this.data.passwordAgain) {
        console.log('密码不一样')
      }
    }
  },
  passwordAgainBlur: function (e) {
    var passwordAgainValue = e.detail.value;
    if (passwordAgainValue.length > 0) {
      this.data.passwordAgainValue = e.detail.value
    }
    if (this.data.password.length > 0 && this.data.passwordAgain.length > 0) {
      if (this.data.password != this.data.passwordAgain) {
        console.log('密码不一样')
      }
    }
  }
})