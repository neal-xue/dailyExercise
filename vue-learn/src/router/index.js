import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test'
import Demo from '../components/Demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: (resolve) => require(['../components/Test'], resolve),
    },
    {
      path: '/',
      name: 'Demo',
      component: (resolve) => require(['../components/Demo'], resolve),
    }
  ]
})
