import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage/HomePage'
import Error from  '@/components/HomePage/404.vue'
import Start from  '@/components/StartPage'
import Land from '@/components/My/Land'
import BindingCell from '@/components/My/BindingCell'
import My from '@/components/My/My'
import BindCellPhone from '@/components/My/BindCellPhone'
import Address from '@/components/My/Address'
import Admin from '@/components/Admin/Admin'
import Uploading from '@/components/Admin/CommodityUploading'
import CommodityManagement from '@/components/Admin/CommodityManagement'
import IntegratedManagement from '@/components/Admin/IntegratedManagement'
import CustomerService from '@/components/Admin/CustomerService'
import DeliveryManagement from '@/components/Admin/DeliveryManagement'
import Order from '@/components/Admin/Order'
import Details from '@/components/Details/Details'
import About from '@/components/My/About'
import PersonalData from '@/components/My/PersonalData'
import Category from '@/components/Category/Category'
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
    	path:"/category",
    	name:"Category",
    	component:Category
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
      path: '/personal',
      name: 'PersonalData',
      component: PersonalData
    },

    //后台管理
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path:'/uploading',
      name:'Uploading',
      component:Uploading
    },
    {
      path:'/class',
      name:'CommodityManagement',
      component:CommodityManagement
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    }
  ]
})

/*
    启动页--------‘/’
    首页----------；/home‘
    登陆注册-------’/land‘‘，register’
    绑定手机号-----’/cell‘
    绑定邮箱-------’/bindcellphone‘
    我的---------’/my‘
  商品分类 --------'/category(2018-11-12)'

    admin
    后台商品管理------’/admin‘
    后台商品上传------’/uploading‘
 */
