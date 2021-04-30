import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/components/goods/goods')
    }, {
      path: '/seller',
      name: 'seller',
      component:  () => import('@/components/seller/seller')
    }, {
      path: '/ratings',
      name: 'ratings',
      component: () => import('@/components/ratings/ratings')
    }, {
      path: '*',
      redirect: '/goods'  //重定向,初始加载
    }
  ],
  linkActiveClass:"active"
})
