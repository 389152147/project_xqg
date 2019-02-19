<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
    <!-- 底部导航栏--tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " :to="item.to"  v-for="item in tabbarList" :key="item.id">
				<span class="mui-icon"><img :src="'http://127.0.0.1:3000/img/tabbar/'+item.img_src"></span>
				<span class="mui-tab-label">{{item.title}}</span>
			</router-link>
		</nav>
    <div class="bottomNav-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tabbarList:[
        {id:1,to:'/Home',img_src:'home-active.png',title:'首页'},
        {id:2,to:'/Nine',img_src:'nine.png',title:'9.9包邮'},
        {id:3,to:'/Classify',img_src:'classify.png',title:'分类'},
        {id:4,to:'/Collection',img_src:'collection.png',title:'收藏'},
        {id:5,to:'/Mine',img_src:'mine.png',title:'我的'}
      ],
    }
  },
  methods:{
   
  }
}
</script>

<style>
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
