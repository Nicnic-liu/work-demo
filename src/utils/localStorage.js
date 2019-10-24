// 引入vue
import Vue from 'vue';

// 定义LocalStorage类
class LocalStorage {

    /**
     * 添加值
     * @param key
     * @param value
     */
    static setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 获取值
     * @param key
     * @returns {string}
     */
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * 移除值
     * @param key
     */
    static removeItem(key) {
        return localStorage.removeItem(key);
    }

    /**
     * 清空
     */
    static clear() {
        localStorage.clear();
    }
}

// 挂载到 Vue原型链
Vue.prototype.$localStorage = LocalStorage;
