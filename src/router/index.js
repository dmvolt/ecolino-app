import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Login from '../components/pages/Login.vue'
import View from '../components/pages/View.vue'

Vue.use(Router)

export default new Router({
 routes:[
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/view/:contentType/:id',
      name: 'View',
      component: View,
      props: true
    }
  ]
})
