import Vue from 'vue'
import Router from 'vue-router'
import TimeDisplay from '@/components/TimeDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimeDisplay',
      component: TimeDisplay
    }
  ]
})
