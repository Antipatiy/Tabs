import Vue from 'vue'
import Router from 'vue-router'
import sortedTabs from '../js/sortedTabs'
import startPage from '@/components/startPage'

const dummyChart = () => import('../components/dummyChart')
const dummyList = () => import('../components/dummyList')
const dummyTable = () => import('../components/dummyTable')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: startPage,
      redirect: '/' + sortedTabs()[1].id
    },
    {
      path: '/dummyChart',
      name: 'dummyChart',
      component: dummyChart
    },
    {
      path: '/dummyList',
      name: 'dummyList',
      component: dummyList
    },
    {
      path: '/dummyTable',
      name: 'dummyTable',
      component: dummyTable
    }
  ]
})
