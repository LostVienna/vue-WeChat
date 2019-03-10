import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Pediatric from '../components/pediatric/Pediatric.vue'
import Cardiovascular from '../components/cardiovascular/Cardiovascular.vue'
import Dermatology from '../components/dermatology/Dermatology.vue'
import Neurology from '../components/neurology/Neurology.vue'
import Psychiatric from '../components/psychiatric/Psychiatric.vue'
import Urology from '../components/urology/Urology.vue'

import My from '@/pages/my/My'
import Index from '@/pages/index/Index'
import Inquery from '@/pages/inquery/Inquery'

import Ask from '@/pages/ask/Ask'
import Login from '@/pages/login/Login'
import Consultation from '@/pages/consultation/Consultation'
import Find from '@/pages/find/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/index',
      children: [
        {
          path: '/',
          component: Pediatric
        },
        {
          path: '/Pediatric',
          name: 'Pediatric',
          component: Pediatric
        },
        {
          path: '/Cardiovascular',
          name: 'Cardiovascular',
          component: Cardiovascular
        },
        {
          path: '/Dermatology',
          name: 'Dermatology',
          component: Dermatology
        },
        {
          path: '/Neurology',
          name: 'Neurology',
          component: Neurology
        },
        {
          path: '/Psychiatric',
          name: 'Psychiatric',
          component: Psychiatric
        },
        {
          path: '/Urology',
          name: 'Urology',
          component: Urology
        }
      ]
    },
    {
      path: '/inquery',
      name: 'Inquery',
      component: Inquery
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/ask',
      component: Ask
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/consultation',
      component: Consultation
    },
    {
      path:'/find',
      component: Find
    }
  ]
})
