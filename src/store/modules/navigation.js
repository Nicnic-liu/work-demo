const state = {   //要设置的全局访问的state对象
    showLeftBar: true,
};
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //承载变化的showFooter的值
        return state.showLeftBar
    }
};
const mutations = {
    navChange(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showLeftBar = !state.showLeftBar;
    },
    resetState(state) {
        state.showLeftBar = true;
    }
};
const actions = {
    changeState(context) {  //同上注释
        context.commit('navChange');
    },
    reState(context) {  //同上注释
        context.commit('resetState');
    }
};
export default {
    namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}