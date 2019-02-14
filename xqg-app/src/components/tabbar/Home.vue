<template>
  <div class="Home">
    <!-- 顶部搜索框 -->
    <header>
      <!-- 跳转到搜索页面 -->
      <a href="javascript:;" class="search">点击跳转搜索页面</a>
      <a href="javascript:;" class="download"></a>
    </header>
    <div class="header-bg"></div>
    <!-- 顶部导航栏 -->
    <div class="nav">
      <a href="javascript:;">精选</a>
      <div class="nav-item">
        <a href="javascript:;">女装</a>
        <a href="javascript:;">美食</a>
        <a href="javascript:;">美妆</a>
        <a href="javascript:;">居家日常</a>
        <a href="javascript:;">男装</a>
        <a href="javascript:;">鞋品</a>
        <a href="javascript:;">数码家电</a>
        <a href="javascript:;">母婴</a>
      </div>
      <a href="javascript:;"></a>
    </div>
    <div class="nav-bg"></div>
    <!-- 轮播 -->
    <div>
      <mt-swipe :auto="2500">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.img_url">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    data(){return{
      list:[
        
      ]
    }},
    created(){
      this.getImages();
    },
    methods:{
      getImages(){
        //完成一个功能,获取服务器端轮播图片
        //1:发送ajax请求
        var url = "http://127.0.0.1:3000/getImages";
        this.axios.get(url).then(result=>{
          //2:获取返回数据保存list
          this.list = result.data;
        })
        
      }
    }  
  }
</script>

<style>
  header{
    width: 100%;
    height: 45px;
    position: fixed;
    top:0;
    left:0;
    font-size: 14px;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
  }
  .header-bg{
    width: 100%;
    height: 45px;
  }
  .search{
    display:inline-block;
    width: 80%;
    height:28px;
    line-height: 15px;
    background:#fff;
    padding-top: 8px;
    margin: 9px 45px 0 10px;
    text-align: center;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius:30px;
    text-decoration: none;
  }
  .download{
    display:block;
    position: absolute;
    top: 0;
    right:0;
    width: 45px;
    text-align: center;
    height:45px;
    background:url('../../img/Home/header/download_148px_1223053_easyicon.net.png') no-repeat;
    background-size:30px;
    background-position:7px 7px;
  }
  /*轮播图设置父元素高度*/
  .Home .mint-swipe{
    height:157px;
  }
  .Home .mint-swipe img{
    width:100%;
  }
  /* 顶部导航栏 */
  .nav{
    position: fixed;
    left: 0;
    width: 100%;
    top: 46px;
    height:40px;
  }
  .nav>a:first-child{
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 40px;
    background: #fff;
    text-align: center;
    line-height: 40px;
    z-index: 54;
  }
  .nav>a:last-child{
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 40px;
    background: #fff;
    text-align: center;
    line-height: 40px;
    z-index: 54;
    background:url('../../img/Home/nav/arrow_bottom_down_downward_navigation_512px_1225446_easyicon.net.png')
  }
  .nav-bg{
    height:40px;
    width:100%;
  }
  .nav-item{
    display:flex;
    flex-wrap: nowrap;
    margin: 0 40px 0 50px;
    position: relative;
    width:1000px;
  }
  .nav-item a{
    display: block;
    padding: 0 15px;
    font-size: 13px;
    text-align: center;
    height: 38px;
    line-height: 40px;
    width:auto;
    border-bottom: solid 2px #fff;
  }
</style>