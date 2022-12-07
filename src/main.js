import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import router from './router'

library.add(fab, fas, far)

createApp(App).use(router).mount('#app')
