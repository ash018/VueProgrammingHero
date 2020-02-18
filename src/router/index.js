import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductDetail from '@/components/ProductDetail'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ProductDetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }

  ]
})
