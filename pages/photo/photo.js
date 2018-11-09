Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png",
      "../../images/img.png"
    ],
    photosUrl:[
      {
        src:"../../images/img.png",
        name:"图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
      {
        src: "../../images/img.png",
        name: "图片1"
      },
    ],
    showUrl:'',
    flag: true
  },

 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },
  showBigger:function(e){
    var index = e.target.dataset.index;
    this.setData({
      showUrl: this.data.photosUrl[index],
      flag:false
    })
  },
  hideBigger:function(){
    this.setData({
      flag:true
    })
  }
})