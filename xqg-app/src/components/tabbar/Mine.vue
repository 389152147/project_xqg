<template>
  <div class="Mine">
    <!-- 登录/注册 -->
    <div class="mine-header">
      <div class="user-info">
        <a href="ss" class="user-img">
          <img src="http://127.0.0.1:3000/img/mine/user_info_tx.png" alt="">
        </a>
        <div class="header-text">        
          <a href="ss" class="login">登录</a>
          <span>/</span>
          <a href="ss" class="register">注册</a>
        </div>
      </div>
      <div class="setting"></div>
    </div>
    <!-- mine-body -->
    <div class="mine-body">
      <div class="user-list">
        <div class="clear-float ">
          <a href="ss" class="list-item right-arrow" v-for="(item,i) in mineList1" :key="i">
            <img :src="item.img_src" alt="">
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data(){return{
      mineList1:[
        {img_src:'http://127.0.0.1:3000/img/mine/wode_icon_like.svg',title:'我的收藏'},
        {img_src:'http://127.0.0.1:3000/img/mine/wode_icon_history.svg',title:'浏览记录'},
        {img_src:'http://127.0.0.1:3000/img/mine/wode_icon_feedback.svg',title:'意见反馈'},
        {img_src:'http://127.0.0.1:3000/img/mine/wode_icon_servicer.svg',title:'联系客服'},
        {img_src:'http://127.0.0.1:3000/img/mine/wode_icon_help.svg',title:'领券帮助'},
        {img_src:'http://127.0.0.1:3000/img/mine/wode_setting_download.svg',title:'下载App'},
      ],
    }}  
  }
</script>

<style>
  /* mine body  */
  .right-arrow:after{
    content:'';
    display:block;
    float: right;
    margin-top:6px;
    width: 15px;
    height:15px;
    background:url("http://127.0.0.1:3000/img/mine/Arrow.png") no-repeat;
  }
  .list-item img{
    position:absolute;
    top:15px;
    left: 10px;
  }
  .list-item span{
    color:#000;
    height:24px;
    line-height:25px;
    font-size:14px;
    padding-left:38px;
    font-family: Arial,Helvetica,sans-serif,"Microsoft YaHei";
  }
  .list-item{
    text-align: left;
    background: #fff;
    height:55px;
    display:block;
    padding:16px 0 10px 10px;
    position:relative;
    border-bottom:1px solid rgb(0,0,0,.1)
  }
  /* mine header */
  .mine-header{
    background: linear-gradient(-90deg,#fa4dbe,#fbaa58);
    height: 180px;
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .setting{
    height:20px;
    width:20px;
    background:url("http://127.0.0.1:3000/img/mine/settings.png") no-repeat;
    position:absolute;
    background-size:20px 20px;
    top:10px;
    right:10px;
  }
  .login,.register{
    color:inherit;
  }
  .header-text{
    /* display:inline-block; */
    color:#fff;
    font-size:20px;
    padding-left:20px;
    height:95px;
    float:left;
    line-height:95px;
  }
  .user-info{
    text-align: left;
    padding-left:5%;
    position:relative;
  }
  .user-img img{
    width: 100%;
  }
  .user-img{
    /* display:inline-block; */
    width:90px;
    float:left;
  }
</style>