<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
    <!-- 底部导航栏--tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " :to="item.to"  v-for="item in tabbarList" :key="item.id">
        <div class="mui-mask" @click="get(item.id)"></div>
        <span class="mui-icon">  <!-- mui框架屏蔽了onclick和href事件。-->
          <img :src="'http://127.0.0.1:3000/img/tabbar/'+item.img_src+'.png'">
          <img :src="'http://127.0.0.1:3000/img/tabbar/'+item.img_src+'-active.png'" v-show="imgActive==item.id">
        </span>
				<span class="mui-tab-label">{{item.title}}</span>
			</router-link>
		</nav>
 
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      imgActive:1,
      tabbarList:[
        {id:1,to:'/Home',img_src:'home',title:'首页'},
        {id:2,to:'/Nine',img_src:'nine',title:'9.9包邮'},
        {id:3,to:'/Classify',img_src:'classify',title:'分类'},
        {id:4,to:'/Collection',img_src:'collection',title:'收藏'},
        {id:5,to:'/Mine',img_src:'mine',title:'我的'}
      ],
    }
  },
  methods:{
    get(num){
      this.imgActive=num
      //console.log(this.imgActive)
    }
  },
}
</script>

<style>
.mui-tab-item{
  position:relative;
}
.mui-mask{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:99
}
.mui-icon{
  position:relative;
}
.mui-icon img{
  position: absolute;
  left:0;
  top:0;
}
.main{
  max-width: 750px;
  margin:auto;
}
.clear-float:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
}
.bottomNav-bg{
  margin-top:10px;
  width:100%;
  height:51px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#fff;
}
.mui-bar img{
  width:24px;
  height:24px;
  margin-bottom:-4px;
}
/* .mui-bar-tab .mui-tab-item.mui-active {
  color: rgb(253, 87, 92);
} */
.mui-bar-tab .router-link-active{
  color: rgb(253, 87, 92);
}
</style>
