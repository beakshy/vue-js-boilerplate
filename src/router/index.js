import Vue from 'vue'
import Router from 'vue-router'
import about from '@/about/index'
import contact from '@/contact/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
