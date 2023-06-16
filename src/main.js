import * as Vue from 'vue'
import App from './App.vue'
import '@/styles/index.module.less'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import UI from '@/components/UI'
const app = Vue.createApp(App)

app.use(UI)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
