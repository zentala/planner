import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$supabase = {
    url: import.meta.env.VUE_APP_SUPABASE_URL,
    key: import.meta.env.VUE_APP_SUPABASE_KEY,
}

app.use(createPinia())
app.use(router)

app.mount('#app')
