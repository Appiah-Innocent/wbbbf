import { createRouter, createWebHistory } from 'vue-router'
import DeviceList from '../views/DeviceList.vue'
import DeviceDetail from '../views/DeviceDetail.vue'

const routes = [
  { path: '/', redirect: '/devices' },
  { path: '/devices', component: DeviceList },
  { path: '/devices/:id', component: DeviceDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
