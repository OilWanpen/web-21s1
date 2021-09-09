import Vue from 'vue'
import Burfy from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.min.css'
import './main.scss' 

Vue.config.productionTip = false
Vue.use(Burfy)

new Vue({ router, store, render: h => h(App) }).$mount('#app')
