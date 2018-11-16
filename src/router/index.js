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
<<<<<<< HEAD
import Address from '@/components/My/Address'
import Personal from '@/components/My/Personal'
import Allset from '@/components/My/allset/allset'
import Snitch from '@/components/My/allset/snitch/snitch'
import Cart from '@/components/ShoppingCart/Cart'
import Edit from '@/components/ShoppingCart/Edit'
import Edit2 from '@/components/ShoppingCart/Edit2'
import Details from '@/components/Details/Details'
import ClassIfication from '@/components/ClassIfication/ClassIfication'


//2.0
import Unpay from '../components/order/unpay-app.vue'
import Pay from '../components/order/pay-app.vue'
import Finished from '../components/order/finished-app.vue'
import Other from '../components/order/other-app.vue'
import ConfirmOrder from '../components/order/comfirmOrder.vue'
import Account from '../components/order/account.vue'

=======
<<<<<<< HEAD
import Address from '@/components/My/Address'

=======
import Category from '@/components/Category/Category'
>>>>>>> 856c9218d243e301c9b590a66abb97da25035c3b
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13

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
<<<<<<< HEAD
    {
        path: '/address',
        name: 'Address',
        component: Address
      },
<<<<<<< HEAD
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
    {
      path: '/allset',
      name: 'Allset',
      component: Allset
    },
    {
      path: '/snitch',
      name: 'Snitch',
      component: Snitch
    },

  //  2.0
    {
      path: '/unpay',
      name: 'Unpay',
      component: Unpay
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/finished',
      name: 'Finished',
      component: Finished
    },
    {
      path: '/other',
      name: Other,
      component: Other
    },
    {
      path: '/confirmOrder',
      name: ConfirmOrder,
      component: ConfirmOrder
    },
    {
      path: '/account',
      name: Account,
      component: Account
    }
=======

=======


>>>>>>> 856c9218d243e301c9b590a66abb97da25035c3b
    // {
    //   path:'/address',
    //   name:'Address',
    //   component:Address
    // }
>>>>>>> 031ea67665af0078ae4b4a7f12785d3e1eb91e13
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
