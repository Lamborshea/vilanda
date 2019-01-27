// miniprogram/pages/todo/todo.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
    todoList: [],
    todoTitle: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }
    this.query();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  handleInput(event) {
    let value = event.detail;
    let todoTitle = this.data.todoTitle;
    todoTitle = value;
    this.setData({
      todoTitle: todoTitle
    })
  },
  handleAdd() {
    let todo = {
      title: this.data.todoTitle,
      checked: false
    }
    if (this.data.todoTitle.trim() !== "") {
      this.addTodo(todo);
    }
  },
  clearInput() {
    this.setData({
      todoTitle: ""
    })
  },
  handleChangeCheckbox(event) {
    const id = event.currentTarget.id;
    const checked = event.detail;
    const index = event.currentTarget.dataset.index;
    let todo = {
      _id: id,
      checked,
      index
    };
    let todoList = this.data.todoList;
    todoList[index].checked = checked;
    this.setData({
      todoList
    })
    this.updateData(todo);
    
  },
  hanldeCloseSwipteCell(event) {
    console.log(event)
    const _this = this;
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      break;
      case 'cell':
        instance.close();
        break;
      case 'right':
        wx.showModal({
          title: '删除待办',
          content: '确认删除此条待办吗？',
          success(res) {
            if (res.confirm) {
              instance.close();
              let _id = event.currentTarget.id;
              let index = event.currentTarget.dataset.index;
              let todo = {
                _id,
                index
              }
              _this.deleteData(todo);
            } else if (res.cancel) {
              instance.close();
            }
          }
        })
        break;
      case 'outside':
        instance.close();
        break;
    }
  },
  query: function() {
    wx.showLoading({
      title: 'Loading',
    })
    const db = wx.cloud.database()
    // 查询当前用户所有的 todoList
    db.collection('todos').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        let todoList = res.data;
        this.setData({
          todoList
        })
        wx.hideLoading()
      },
      fail: err => {
        wx.hideLoading();
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        // console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
  addTodo: function ({ title, checked}) {
    const db = wx.cloud.database()
    db.collection('todos').add({
      data: {
        title,
        checked,
      },
      success: res => {
        let todoList = this.data.todoList
        todoList.push({
          id: res._id,
          title,
          checked
        })
        this.clearInput();
        this.setData({
          todoList
        })
        // console.log('[数据库] [新增记录] 成功，记录 _id: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  updateData({_id, checked, index}) {
    const db = wx.cloud.database()
    db.collection('todos').doc(_id).update({
      data: {
        checked
      },
      success: res => {
      },
      fail: err => {
        let todoList = this.data.todoList;
        todoList[index].checked = !checked;
        this.setData({
          todoList
        })
        console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  },
  deleteData({_id, index}) {
    const db = wx.cloud.database()
    console.log(_id);
    console.log(index);
    db.collection('todos').doc(_id).remove({
      success: res => {
        let todoList = this.data.todoList;
        todoList.splice(index, 1);
        this.setData({
          todoList
        })
        wx.showToast({
          title: '删除成功',
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
        console.error('[数据库] [删除记录] 失败：', err)
      }
    })
  }
})