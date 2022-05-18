import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import { setupStore } from './stores'
import { setupRouter } from './routes'

const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
