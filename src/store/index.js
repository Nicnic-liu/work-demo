// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'
import navigation from './modules/navigation'
// 通过中间件使用Vuex
Vue.use(Vuex);

// 暴露store
export default new Vuex.Store({
    // store模块
    modules: {
        navigation
    }
});
;
