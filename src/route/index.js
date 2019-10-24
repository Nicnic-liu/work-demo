import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },

        // 登录页路由配置
        {
            path: '/login',
            component: resolve => require(['@/views/login/Login.vue'], resolve)

        },
        {
            path: "/",
            component: resolve => require(['@/views/index'], resolve),
            redirect: "/homePage",
            meta: {btnPermissions: ['admin', 'supper']},
            children: [
                {
                    path: 'homePage',
                    component: resolve => require(['@/views/home/Home.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/goods/goodsList',
                    component: resolve => require(['@/views/goodsManage/goods/GoodsList.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/goods/goodsBasic',
                    component: resolve => require(['@/views/goodsManage/goods/GoodsBasic.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/goods/sortList',
                    component: resolve => require(['@/views/goodsManage/sort/SortList.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/goods/sortBasic',
                    component: resolve => require(['@/views/goodsManage/sort/SortBasic.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/orders/orderList',
                    component: resolve => require(['@/views/orderManage/order/OrderList.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: '/orders/orderDetail',
                    component: resolve => require(['@/views/orderManage/order/OrderDetail.vue'], resolve),
                    meta: {btnPermissions: ['admin', 'supper']},
                },
                {
                    path: 'userList',
                    component: resolve => require(['@/views/userManage/UserList.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/setting',
                    component: resolve => require(['@/views/appletsManage/appletsManage/AppletsForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/homeDesign',
                    component: resolve => require(['@/views/appletsManage/pageManage/homeDesign/HomeDesign.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/pageLink',
                    component: resolve => require(['@/views/appletsManage/pageManage/pageLink/PageLink.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/helpCenterList',
                    component: resolve => require(['@/views/appletsManage/helpCenter/HelpCenterList.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/helpCenterBasic',
                    component: resolve => require(['@/views/appletsManage/helpCenter/HelpCenterBasic.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/applets/navSetting',
                    component: resolve => require(['@/views/appletsManage/navSetting/NavSetting.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: 'appCenter',
                    component: resolve => require(['@/views/appCenter/AppCenter.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/mall',
                    component: resolve => require(['@/views/settingManage/mallSetting/MallSettingForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/deal',
                    component: resolve => require(['@/views/settingManage/dealSetting/DealSettingForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/deliveryList',
                    component: resolve => require(['@/views/settingManage/deliverySetting/DeliverySettingList.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/deliveryBasic',
                    component: resolve => require(['@/views/settingManage/deliverySetting/DeliverySettingBasic.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/message',
                    component: resolve => require(['@/views/settingManage/messageSetting/MessageSettingForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/upload',
                    component: resolve => require(['@/views/settingManage/uploadSetting/UploadSettingForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/other/cleanCache',
                    component: resolve => require(['@/views/settingManage/other/cleanCache/CleanCacheForm.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
                {
                    path: '/setting/other/detect',
                    component: resolve => require(['@/views/settingManage/other/detectCondition/DetectCondition.vue'], resolve),
                    meta: {btnPermissions: ['supper']},
                    children: []
                },
            ]
        },
    ]
})
//router-link多次点击一个地址，报错，以下是解决办法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// import Vue from 'vue'
// import Router from 'vue-router'
//
// Vue.use(Router)
//
// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: resolve => require(['@/views/lineMerge/LineMergeList.vue'],resolve),
//             meta: { btnPermissions: ['admin'] }
//         },
//         {
//             path: '/lineMoving',
//             component: resolve => require(['@/views/lineMoving/LineMovingList.vue'],resolve),
//             meta: { btnPermissions: ['lalal'] }
//         },
//     ]
// })
