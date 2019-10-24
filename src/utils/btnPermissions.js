import Vue from 'vue'

/**权限指令**/
const has = Vue.directive('has', {
    //inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function (el, binding, vnode) {
        // 获取按钮权限
        let btnPermissions = vnode.context.$route.meta.btnPermissions.slice(',');
        if (!Vue.prototype.$_has(btnPermissions)) {
            el.parentNode.removeChild(el);
        }
    }
});
// 权限检查方法
Vue.prototype.$_has = function (value) {
    let isExist = false;
    //获取用户此时的权限
    //let btnPermissionsStr = sessionStorage.getItem("btnPermissions");
    let btnPermissionsStr = 'supper';
    if (!btnPermissionsStr) {
        return false;
    }
    if (value.indexOf(btnPermissionsStr) > -1) {
        isExist = true;
    }
    return isExist;
};
export {has}