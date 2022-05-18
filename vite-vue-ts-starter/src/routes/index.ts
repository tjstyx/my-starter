import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/main.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
}
