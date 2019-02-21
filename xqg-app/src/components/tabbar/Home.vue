<template>
  <div class="Home">
    <!-- 顶部搜索框 -->
    <header>
      <!-- 跳转到搜索页面 -->
      <router-link to="javascript:;" class="search">点击跳转搜索页面</router-link>
      <router-link to="javascript:;" class="download"></router-link>
    </header>
    <div class="header-bg"></div>
    <!-- 顶部导航栏 -->
    <div class="nav">
      <router-link to="javascript:;">精选</router-link>
      <div class="nav-item">
        <router-link to="javascript:;">女装</router-link>
        <router-link to="javascript:;">美食</router-link>
        <router-link to="javascript:;">美妆</router-link>
        <router-link to="javascript:;">居家日常</router-link>
        <router-link to="javascript:;">男装</router-link>
        <router-link to="javascript:;">鞋品</router-link>
        <router-link to="javascript:;">数码家电</router-link>
        <router-link to="javascript:;">母婴</router-link>
      </div>
      <router-link to="javascript:;">
        <img src="../../img/Home/nav/arrow_bottom_down_downward_navigation_512px_1225446_easyicon.net.png" alt="">
      </router-link>
    </div>
    <div class="nav-bg"></div>
    <div class="main">
      <!-- 轮播 -->
      <mt-swipe :auto="2500">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.img_url">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 图标导航 -->
      <div class='icon-nav'>
        <router-link to='javascript:;' v-for="item in iconNav" :key="item.id">
          <img :src="'http://127.0.0.1:3000/img/home/'+item.img_src" alt="">
          <p>{{item.title}}</p>
        </router-link>
      </div>
      <!-- 优惠头条 -->
      <div class="sale">
        <div class="sale-img1">
          <img src="http://127.0.0.1:3000/img/home/sale/sale.gif" alt="">
        </div>
        <router-link class="sale-item" to='javascript:;'>
          <div class="sale-text">
            <p class="sale-text-name">
              <span>咚咚抢</span>
              <span>下饭神器！香菇牛肉酱</span>
            </p>
            <p class="sale-text-tab">
              <span>前2小时第2件0元</span>
              <span>热销1.7W </span>
            </p>
          </div>
          <div class="sale-img2">
            <img  src="http://127.0.0.1:3000/img/home/sale/sale1.jpg" alt="">
          </div>
        </router-link>
      </div>
      <!-- 一楼 -->
      <div class="floor1">
        <div class='floor1-left'>
          <div class="floor1-left-text">
            <p>9.9包邮</p>
            <p>近一小时疯抢</p>
          </div>
          <img src="http://127.0.0.1:3000/img/home/floor1/floor1-img1.jpg" alt="">
        </div>
        <div class='floor1-right'>
          <!-- 上 -->
          <div>
            <div class="floor1-right-text1">
              <p>咚咚抢</p>
              <p class="floor1-time">
                <span>10点场</span>
                <span>00:00:00</span>
              </p>
            </div>
            <img src="http://127.0.0.1:3000/img/home/floor1/floor1-right-img1.png" alt="">
          </div>
          <!-- 下 -->
          <div>
            <div class="floor1-right-text2">
              <p>开学装备</p>
              <p>儿童书包低至19.9</p>
            </div>
            <img src="http://127.0.0.1:3000/img/home/floor1/floor1-right-img2.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- 二楼 -->
      <div class="floor2">
        <div class="floor2-header">
          <div class="floor2-header-left">
            <span></span>
            <span>大家都在领</span>
          </div>
          <div class="floor2-header-right">
            <span>132131</span>
            <span>次实时领劵</span>
          </div>
        </div>
        <div class="floor2-body">
          <div class="floor2-body-product" v-for="item in floor2Product" :key="item">
            <router-link to="javascript:;" class="product-img">
              <img src="http://127.0.0.1:3000/img/home/floor2/floor2-body-img1.jpg" alt="">
              <p>
                6.6万
                <span>人已领</span>
                <span>|</span>
                40元券
              </p>
            </router-link>
            <p class="product-name">儿童切水果玩具过家家厨房组合</p>
            <p class="product-price">
              ￥
              <span>9.9</span>
              <del>￥49.9</del>
            </p>
            <p class="product-progress">
              <i style="width:60%"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){return{
      list:[],
      iconNav:[
        {id:1,img_src:'home-nav1.png',title:'疯抢排行'},
        {id:2,img_src:'home-nav2.png',title:'咚咚枪'},
        {id:3,img_src:'home-nav3.png',title:'每日半价'},
        {id:4,img_src:'home-nav4.png',title:'折上折'},
        {id:5,img_src:'home-nav5.png',title:'聚品团'}
      ],
      floor2Product:[1,2,3,4,5,6,7]
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
  /*floor2 */
  .product-progress i{
    display: block;
    height: 3px;
    overflow: hidden;
    background-color: #FF66B7;
    width: 5px;
    transition: all 1s ease 0s;
    transform-origin: center;
  }
    
  .product-progress{
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    height: 3px;
    background-color: #FFD6EC;
    width: 100%;
  }
  .product-price del{
    color:#bbb;
    font-size:14px;
  }
  .product-price span{
    font-size:17px;
    margin-right:5px;
  }
  .product-price{
    font-size:11px;
    text-align: left;
    color:#FC4D52; 
  }
  .product-name{
    line-height: 13px;
    font-size: 14px;
    color:#000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-img p{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: linear-gradient(to left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
    color: #fff;
    padding: 1px 4px;
    font-size: 12px;
    text-align: center;
    border-radius: 8px;
  }
  .product-img img{
    width:100%;
  }
  .product-img{
    display:block;  
    padding: 10px 6px 0;
    position:relative;
  }
  .floor2-body-product{
    width: 40%;
    padding: 10px 10px 0;
    border-radius: 8px 8px 0 0;
    box-shadow: 3px 0 10px 0 rgba(0,0,0,.1);
    position:relative;
  }
  .floor2-body{
    display:flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow: hidden;
    padding-top: 10px;
    padding-left: 10px;
  }
  .floor2-header-left span:first-child{
    background: linear-gradient(to top,#ff5d06 0,#fc3f78 100%);
    margin-right: 8px;
    width: 3px;
    height: 12px;
    display:inline-block;
  }
  .floor2-header{
    display:flex;
    font-size:15px;
    padding:8px 0;
    border-bottom:1px solid #ddd;
  }
  .floor2-header-left{
    width:40%;
    text-align: left;
    padding-left:10px;
  }
  .floor2-header-right{
    width:60%;
    text-align: right;
    padding-right:10px;
  }
  .floor2-header-right span:first-child{
    color: #FC4D52;
    font-size:15px;
  }
  .floor2-header-right span:last-child{
    color: #aaa;
    font-size:13px;
  }
  /*floor1 */
  .floor1-time span:last-child{
    color: #FC4D52;
    font-size:12px;
    padding:1px 8px 1px 17px;
    border-radius: 10px;
    border:1px #FC4D52 solid;
    border-left:0;
    margin-left:-19px;
  }
  .floor1-time span:first-child{
    background: #FC4D52;
    color: #fff;
    font-size:12px;
    padding:2px 8px;
    border-radius: 10px;
  }
  .floor1-right-text2 p{
    margin-bottom:4px;
    text-align: left;
    padding-left:10px;
    color:transparent;
    -webkit-background-clip:text;
    background-image: -webkit-linear-gradient(left, rgb(212, 0, 255), rgb(255, 50, 10));
  }
  .floor1-right-text2 p:first-child{
    color: #FF566F;
    font-size:15px;
    margin-top:5px;
  }
  .floor1-right-text2{
    position:absolute;
  }
  .floor1-right-text1{
    position:absolute;
  }
  .floor1-right-text1 p:first-child{
    color: #FF566F;
    font-size:15px;
    margin-top:5px;
  }
  .floor1-right-text1 p{
    margin-bottom:4px;
    text-align: left;
    padding-left:10px;
  }
  .floor1-right img{
    height:100px;
  }
  .floor1-right>div{
    height:100px;
    width:100%;
    /* border:1px solid red; */
    overflow: hidden;
    position:relative;
    text-align: right;
  }
  .floor1-right>div:first-child{
    border-bottom:3px #fff solid;
  }
  .floor1-left-text{
    width: 100%;
    position:absolute;
    top:0;
    left:0;
  }
  .floor1-left img{
    height:200px;
  }
  .floor1-left p{
    text-align: left;
    padding-left:10px;
  }
  .floor1-left p:first-child{
    font-size: 15px;
    font-weight: 400;
    color: #FF566F;
    margin-bottom: 4px;
    margin-top:5px;
  }
  .floor1-left{
    width:40%;
    /* border:1px solid red; */
    position:relative;
    overflow: hidden;
    text-align: right;
    padding-right: 3px;
  }
  .floor1-right{
    width:60%;
  }
  .floor1{
    display:flex;
    height:200px;
  }
  /* 优惠头条 */
  .sale-text-tab span{
    border-radius: 2px;
    border: 1px solid rgba(252,77,82,.9);
    display: inline-block;
    color: #FC4D52;
    font-size: 11px;
    padding: 0 4px;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  .sale-text-name,.sale-text-tab{
    margin-bottom:2px;
    text-align: left;
    padding-left:5px;
  }
  .sale-text-name span:first-child{
    color: #fff;
    background-image: -webkit-linear-gradient(left, rgb(254, 189, 23), rgb(255, 130, 67));
  }
  .sale-img2{
    width:30%;
  }
  .sale-img2 img{
    width:60px;
    height:60px;
    margin-top:3px;
  }
  .sale-text{
    width:70%;
    font-size:12px;
    text-overflow: ellipsis;
    margin-top:6px;
  }
  .sale-item{
    width:80%;
    display:flex;
    justify-content: space-around;
  }
  .sale{
    display:flex;
    justify-content: flex-start;
    width:100%;
  }
  .sale-img1{
    width:20%;
  }
  .sale-img1>img{
    width:60px;
    height:60px;
    margin:auto;
  } 
  /* 图标导航 */
  .icon-nav{
    margin-top:5px;
    display: flex;
    width:100%;
    justify-content: space-around;
  }
  .icon-nav img{
    width:60px;
    height:60px;
    margin-bottom:-5px;
  }
  .icon-nav p{
    color:#000;
  }
  /*  */
  header{
    width: 100%;
    height: 45px;
    position: fixed;
    top:0;
    left:0;
    font-size: 14px;
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    z-index:99;
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
    /* margin-bottom:9px; */
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
    top: 45px;
    height:40px;
    background:#fff;
    z-index:99;
  }
  .nav>a:first-child{
    font-size:18px;
    color:#000;
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
    color:#000;
  }
  .nav>a:last-child img{
    width:30px;
    height:30px;

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
    color:#000;
  }
  @media screen and (min-width:767px){
    .Home .mint-swipe{
      height:312px;
    }
  }
</style>