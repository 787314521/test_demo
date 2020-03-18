import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import code from '@/components/code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/code',
      name:"code",
      component:code
    }
  ]
})
