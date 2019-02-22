<template>
  <div class="Classify">
    <header>
      <div class="back"></div>
      <div class="search">
        <i class="search-img"></i>
        <span>补水面膜</span>
      </div>
    </header>
    
    <div class="main">
      <div class="content clear-float">   
   
        <div id="segmentedControls" class="">
            <div class="header-bg"></div> 
            <a :class="{'active':tabId==index}" class="" @click="tabId=index;" v-for="(item,index) in segmentedControls" :key="index">{{item.title}}</a>
        </div>
        <div id="segmentedControlContents" class="">
          <div class="control-content clear-float" :class="{'active':tabId==0}">
            <div class="header-bg"></div> 
            <a href="ss" class="content-item" v-for="(item,i) in 17" :key="i">
              <img src="http://127.0.0.1:3000/img/classify/img1.jpg" alt="">
              <p>外套</p>
            </a>
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==1}">
            <div class="header-bg"></div> 
            111
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==2}">
            <div class="header-bg"></div> 
            222
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==3}">
            <div class="header-bg"></div> 
            333
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==4}">
            <div class="header-bg"></div> 
            444
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==5}">
            <div class="header-bg"></div> 
            555
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==6}">
            <div class="header-bg"></div> 
            666
            <bottomNavBg></bottomNavBg>
          </div>
          <div class="control-content" :class="{'active':tabId==7}">
            <div class="header-bg"></div> 
            777
            <bottomNavBg></bottomNavBg>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
  export default {
    data(){return{
      tabId:0,
      segmentedControls:[
        {title:"女装"},
        {title:"美食"},
        {title:"美妆"},
        {title:"居家日常"},
        {title:"男装"},
        {title:"鞋品"},
        {title:"数码家电"},
        {title:"母婴"},
        {title:"箱包"},
        {title:"文娱车品"},
        {title:"配饰"},
        {title:"内衣"},
        {title:"家装家纺"},
        {title:"家装家纺"},
        {title:"家装家纺"},
        {title:"家装家纺"},
      ]
    }},
    methods: {

    },
  }
  
</script>

<style>
  .bottomNavBg{
    clear:both;
  }
  .content-item p{
    font-size:12px;
    color:#333;
  }
  .content-item img{
    width: 60%;
    min-height: 40px;
    display: block;
    margin:auto;
  }
  .content-item{
    display: block;
    font-size: 12px;
    line-height: 25px;
    overflow: hidden;
    padding-bottom: 20px;
    float:left;
    width:33%;
  }
  #segmentedControlContents .active{
    display:block;
  }
  .control-content{
    display: none;
    padding-top:20px;
  }
  #segmentedControlContents{
    float:left;
    width:75%;
    height:100%;
    overflow-y: scroll;
  }
  .content{
    position: fixed;
    top:0;
    width:100%;
    height:100%;
  }
  #segmentedControls{
    float:left;
    width:25%;
    overflow-y: scroll;
    height:100%;
  }
  #segmentedControls a{
    width:100%;
    line-height: 45px;
    display: block;
    height: 45px;
    color: #333;
    z-index: 10;
    font-size: 13px;
    text-align: center;
    position: relative;
    -webkit-transition: all .4s cubic-bezier(.4,.68,.15,1) 0s;
  }
  #segmentedControls>.active{
    color: #FC3F78;
    border-left:2px solid #FC3F78 !important;
    background:#fff;
  }
  #segmentedControlContents{
    background:#fff;
  }
  .Classify .header-bg{
    width:100%;
    height:44px;
  }
  .Classify .search span{
    color: #ccc;
    font-size: 14px;
    display:inline-block;
    line-height:28px;
    height:28px;
    float: left;
  }
  .Classify .search-img{
    background:url("../../img/Nine/header/cms-img.png") 6px -24px no-repeat;
    width: 24px;
    height: 24px;
    display:inline-block;
    background-size: 287px 800px;
    float: left;
  }
  .Classify header .search{
    background-color: #fff;
    border-radius: 5px;
    min-width: 50%;
    margin-left: 10px;
    line-height: 28px;
    height: 28px;
    margin-left:30px;
    text-align: left;
  }
  .Classify header .back{
    height: 28px;
    width: 28px;
    display: block;
    background: url("../../img/Nine/header/cms-img.png") -32px 0 no-repeat;
    background-size: 287px 800px;
    position:absolute;
    top:9px;
    left:10px;
  }
  .Classify header{
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    padding: 8px 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 120;
    display: block;
    box-sizing: border-box;
  }

</style>