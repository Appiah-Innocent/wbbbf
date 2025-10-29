import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'


createApp(App).mount('#app')


// Import global CSS if needed
import './assets/main.css'

const app = createApp(App)

app.use(router)   // register router
app.mount('#app') // mount to <div id="app"> in index.html

