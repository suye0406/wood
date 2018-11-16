import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage/HomePage'
import Error from  '@/components/HomePage/404.vue'
import Start from  '@/components/StartPage'
import Land from '@/components/My/Land'
import BindingCell from '@/components/My/BindingCell'
import My from '@/components/My/My'
import BindCellPhone from '@/components/My/BindCellPhone'
import About from '@/components/My/About'
import Address from '@/components/My/Address'
import Personal from '@/components/My/Personal'
import Cart from '@/components/ShoppingCart/Cart'
import Edit from '@/components/ShoppingCart/Edit'
import Edit2 from '@/components/ShoppingCart/Edit2'
import Details from '@/components/Details/Details'
import ClassIfication from '@/components/ClassIfication/ClassIfication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      name: 'Error',
      component: Error
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/land',
      name: 'Land',
      component: Land
    },
    {
      path: '/cell',
      name: 'BindingCell',
      component: BindingCell
    },
    {
      path: '/bindcellphone',
      name: 'BindCellPhone',
      component: BindCellPhone
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
        path: '/address',
        name: 'Address',
        component: Address
      },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
      },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit
      },
    {
      path: '/edit2',
      name: 'Edit2',
      component: Edit2
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/ification',
      name: 'ClassIfication',
      component: ClassIfication
    },
  ]
})

/*
    启动页--------‘/’
    首页----------；/home‘
    登陆注册-------’/land‘‘，register’
    绑定手机号-----’/cell‘
    绑定邮箱-------’/bindcellphone‘
    我的---------’/my‘

    admin
    后台商品管理------’/admin‘
    后台商品上传------’/uploading‘
 */
