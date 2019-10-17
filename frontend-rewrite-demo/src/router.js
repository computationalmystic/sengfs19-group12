import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import OtherInfo from './views/OtherInfo.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home', 
      name: 'dashboard',
      component: Dashboard, 
      children: [
        {
          path: 'home', 
          name: 'home', 
          component: Home
        }, 
        {
          path: 'other-info', 
          name: 'other-info', 
          component: OtherInfo
        }
      ]
    }
  ]
})
