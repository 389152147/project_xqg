<template>
  <div class="Nine">
    <header>
      <!-- 跳转到搜索页面顶部 -->
      <router-link to="javascript:;" class="back"></router-link>
      <div  class="nine">
        <router-link to="javascript:;">
          <img src="http://127.0.0.1:3000/img/nine/header/nine_title.svg" alt="">
        </router-link>
      </div>
      <router-link to="javascript:;" class="menu"></router-link>
    </header>
    <div class="header-bg"></div>
    <div class="main">
      <!-- 顶部tab -->
      <div class="nine-tab clear-float">
        <router-link class="list list1" to="javascript:;">
          <div class="list-text">
            <h3>9.9每日精选</h3>
            <p>十元封顶</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list1-img.jpg" alt="">
        </router-link>
        <router-link class="list list2" to="javascript:;">
          <div class="list-text">
            <h3>无暇底妆</h3>
            <p>持久不脱妆</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list2-img.jpg" alt="">
        </router-link>
        <router-link class="list list3" to="javascript:;">
          <div class="list-text">
            <h3>儿童玩具</h3>
            <p>爆款6.5元起</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list3-img.jpg" alt="">
        </router-link>
        <router-link class="list list4" to="javascript:;">
          <div class="list-text">
            <h3>29.9专区</h3>
            <p>半价抢不停</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list4-img.jpg" alt="">
        </router-link>
        <router-link class="list list5" to="javascript:;">
          <div class="list-text">
            <h3>潮流卫衣</h3>
            <p>青春力满分</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list5-img.jpg" alt="">
        </router-link>
        <router-link class="list list6" to="javascript:;">
          <div class="list-text">
            <h3>美甲日记</h3>
            <p>指尖的春天</p>
          </div>
          <img src="http://127.0.0.1:3000/img/nine/nine-tab/list6-img.jpg" alt="">
        </router-link>
      </div>
      <!-- 顶部导航 -->
      <div class="nine-nav">
        <router-link to="javascript:;" class="nine-nav-item" v-for="item in navList" :key="item.id">
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){return{
      navList:[
        {id:1,title:"精选"},
        {id:2,title:"居家百货"},
        {id:3,title:"美食"},
        {id:4,title:"服装"},
        {id:5,title:"装饰"},
        {id:6,title:"美妆"},
        {id:7,title:"内衣"},
        {id:8,title:"母婴"},
        {id:9,title:"箱包"},
        {id:10,title:"数码配件"},
        {id:11,title:"文娱车品"}
      ]
    }}  
  }
</script>

<style>
  /* 顶部导航 */
  .nine-nav-item span{
    font-size:14px;
    color:#333;
    height: 54px;
    line-height: 54px;
    margin: 0 15px;
    font-size: 14px;
    text-align: center;
    display:inline-block;
  }
  .nine-nav{
    width:100%;
    white-space: nowrap;
    overflow-x: scroll; 
    overflow-y: hidden;

  }
  /* 顶部tab */
  .nine-tab{
    border-bottom:10px #eee solid;
    background:#fff;
  }
  .list img{
    width:100%;
  }
  .list6 h3{
    background: linear-gradient(to right,#C71585, #DB7093); /* 标准的语法 */
    -webkit-background-clip: text;
  }
  .list5 h3{
    background: linear-gradient(to right,#FFA500, #FFA500); /* 标准的语法 */
    -webkit-background-clip: text;
  }
  .list4 h3{
    background: linear-gradient(to right, #9370DB, #7B68EE); /* 标准的语法 */
    -webkit-background-clip: text;
  }
  .list3 h3{
    background: linear-gradient(to right, #8B4513, #A0522D); /* 标准的语法 */
    -webkit-background-clip: text;
  } 
  .list2 h3{
    background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #9370DB , #7B68EE); /* 标准的语法 */
    -webkit-background-clip: text;
  }
  .list1 .list-text h3{
    background-image: -webkit-linear-gradient(left, rgb(212, 0, 255), rgb(255, 50, 10));
    -webkit-background-clip: text;
  }
  .list-text p{
    color: #999;
    font-size: 12px;
    padding-left: 10px;
    line-height: 18px;
    text-align: left;
  }
  .list-text h3{
    padding: 3px 0 5px 10px;
    overflow: hidden;
    height: 26px;
    line-height: 26px;
    font-size: 15px;
    font-weight: 400;
    color: transparent;
    margin-bottom:0;
    text-align: left;
    margin-top:0;
  }
  .list-text{
    position:absolute;
    top:0;
    left:0;
  }
  .list1,.list2,.list3{
    border-bottom:1px solid #f5f5f5;
  }
  .list1,.list2,.list4,.list5{
    border-right:1px solid #f5f5f5;
  }
  .list2,.list3,.list5,.list6{
    width:25%;
    position:relative;
    display:block;
    float:left;
  }
  .list1,.list4{
    position:relative;
    display:block;
    float:left;
    width:50%;
  }
  /*顶部  */
  .nine{
    width:80%;
    margin:auto;
    float:left;
  }
  .menu{
    width:10%;
    background: url("../../img/Nine/header/cms-img.png") -243px 0 no-repeat;
    background-size: 287px 800px;
    width: 28px;
    height: 28px;
    float:right;
  }
  .back{
    width:10%;
    height: 28px;
    width: 28px;
    display: block;
    background: url("../../img/Nine/header/cms-img.png") -32px 0 no-repeat;
    background-size: 287px 800px;
    float: left;
  }
  header{
    width: 100%;
    height: 45px;
    padding: 8px 10px;
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
</style>