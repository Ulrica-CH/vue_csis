import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/fonts/iconfont.css'
import { Form, FormItem, Input, Button, Message } from 'element-ui'
import axios from 'axios'


Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/' // http: //www.ysqorz.top:8888/api/private/v1/
Vue.prototype.$message = Message
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')