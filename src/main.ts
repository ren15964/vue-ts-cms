import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import Icons from './global/register-icons'
import Store from './store'

const app = createApp(App)
app.use(Icons)
app.use(Store)
app.use(router)
app.mount('#app')
