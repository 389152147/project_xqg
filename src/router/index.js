import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testContainer from '../components/testContainer.vue'
import Home from '../components/tabbar/Home.vue'
import Nine from '../components/tabbar/Nine.vue'
import Classify from '../components/tabbar/Classify.vue'
import Collection from '../components/tabbar/Collection.vue'
import Mine from '../components/tabbar/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/test01',component:testContainer},
    {path:'/Home',component:Home},
    {path:'/Nine',component:Nine},
    {path:'/Classify',component:Classify},
    {path:'/Collection',component:Collection},
    {path:'/Mine',component:Mine}
  ]
})
