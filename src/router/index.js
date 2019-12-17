import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../../src/views/Home.vue'
import Category from '../../src/views/Category.vue'
import Cart from '../../src/views/Cart.vue'
import My from '../../src/views/My.vue'

import Search from '../views/scomponent/Search.vue'
import Details from '../views/scomponent/Details.vue'
import List from '../views/scomponent/List.vue'

import mine from '../views/My-component/mine.vue'

import register from '../views/My-component/register.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Category',
      component: Category,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Cart',
      component: Cart,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/My',
      component: My,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/home/Details',
      component: Details,
    }, 
    {
      path: '/List',
      component: List,
    },
    {
      path: '/home/mine',
      component: mine,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/My/register',
      component: register
    }

  ]
}
)
