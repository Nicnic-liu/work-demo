// 引入vue
import Vue from 'vue';

// 定义sessionStorage类
class sessionStorage {

    /**
     * 添加值
     * @param key
     * @param value
     */
    static setItem(key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 获取值
     * @param key
     * @returns {string}
     */
    static getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    /**
     * 移除值
     * @param key
     */
    static removeItem(key) {
        return sessionStorage.removeItem(key);
    }

    /**
     * 清空
     */
    static clear() {
        sessionStorage.clear();
    }
}

// 挂载到 Vue原型链
Vue.prototype.$sessionStorage = sessionStorage;