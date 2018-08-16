//import cookie from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPage from './AppPage.vue'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'

Vue.use(VueRouter)

let app = new Vue({
  el: '#app',
  components: {AppPage, Page1, Page2},
  router: new VueRouter({
    routes: [{
      name: 'home',
      path: '/',
      component: AppPage,
      children: [{
        name: 'page1',
        path: 'page1',
        component: Page1
      }, {
        name: 'page2',
        path: 'page2',
        component: Page2
      }]
    }]
  })
})
