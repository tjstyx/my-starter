// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import type { UserModule } from './types'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const head = createHead()

const routes = setupLayouts(generatedRoutes)

// const app = createApp(App)

// app.use(head)

// setupPinia(app)
// setupRouter(app)

// app.mount('#app')

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
