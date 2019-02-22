// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bottomNavBg from '../src/components/sub/bottomNavBg.vue'

Vue.component('bottomNavBg', bottomNavBg)


Vue.config.productionTip = false
//引入element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//mint-ui css文件
import'mint-ui/lib/style.css'
//按需引入mint-ui
import {Swipe,SwipeItem,Tabbar, TabItem} from "mint-ui";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入axios

import axios from "axios"
//5:修改配置信息 跨域保存session值!!!!
axios.defaults.withCredentials=true
//6:注册组件
Vue.prototype.axios = axios

//引入子组件


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
