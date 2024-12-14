import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import {createPinia} from 'pinia'
import router from "@/router";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia).use(router)

app.use(Antd)
    .mount('#app')
