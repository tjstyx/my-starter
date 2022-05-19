import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import { setupStore } from './stores'
import { setupRouter } from './routes'

const app = createApp(App)
const head = createHead()

setupStore(app)
setupRouter(app)

app.use(head)

app.mount('#app')
