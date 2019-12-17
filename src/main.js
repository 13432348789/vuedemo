import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import 'lib-flexible'

import { Search } from 'vant';
import { Tabbar, TabbarItem } from 'vant'

import { Swipe, SwipeItem } from 'vant';

import { Grid, GridItem } from 'vant';

import { Tab, Tabs,submitBar,checkbox } from 'vant';

import { TreeSelect } from 'vant';

import { popup, cell } from 'vant';

import { Collapse, CollapseItem, icon } from 'vant';

import { Overlay, button } from 'vant'

import { dialog } from 'vant'

import { Toast } from 'vant';

import { Notify } from 'vant';

Vue.config.productionTip = false

Vue.use(Search)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)
   .use(Grid)
   .use(GridItem)
   .use(Tab)
   .use(Tabs)
   .use(TreeSelect)
   .use(popup)
   .use(cell)
   .use(Collapse)
   .use(CollapseItem)
   .use(icon)
   .use(Overlay)
   .use(button)
   .use(submitBar)
   .use(checkbox)
   .use(dialog)
   .use(Toast)
   .use(Notify);
   
Vue.use(ElementUI)
Vue.use(VueAxios, axios).use(Vuex)
   

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
