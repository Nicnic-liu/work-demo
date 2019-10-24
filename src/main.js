import Vue from 'vue'
import App from './App.vue'
// 引入elementUI组件
import ElementUI from 'element-ui';
// 引入elementUI样式
import 'element-ui/lib/theme-chalk/index.css';
//使用elementUI
Vue.use(ElementUI);

// 引入路由
import router from './route/index'
// 通过中间件使用路由
Vue.use(router);

// 引入Vuex store
import store from './store'

// 引入axios
import './utils/axios.js';
// 公共样式 引入即生效
import './styles/main.scss'
// 公共样式 引入即生效
import './styles/common.css'
//引入权限控制
import has from '@/utils/btnPermissions.js';

// 引入sessionStorage
import '@/utils/sessionStorage.js';
// 引入localStorage
import '@/utils/localStorage.js';

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    },
}).$mount('#app')
