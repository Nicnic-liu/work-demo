// 引入Vue
import Vue from 'vue';

// 引入moment
import moment from 'moment';

/**
 * 24小时制时分秒格式化
 */
Vue.filter('time_HH_MM_SS', function (val) {

	return moment(val).format('YYYY-MM-DD HH:mm:ss');
})

/**
 * 24小时制时分格式化
 */
Vue.filter('time_HH_MM', function (val) {

	return moment(val).format('YYYY-MM-DD HH:mm');
})

/**
 * 12小时制时分秒格式化
 */
Vue.filter('time_hh_MM_SS', function (val) {

	return moment(val).format('YYYY-MM-DD hh:mm:ss');
})

/**
 * 12小时制时分格式化
 */
Vue.filter('time_hh_MM', function (val) {

	return moment(val).format('YYYY-MM-DD hh:mm');
})

/**
 * 格式化金额
 */
Vue.filter('moneyFormat', function (value) {
	if (value >= 0) {
		const money = Number(value)
		return '￥ ' + money.toFixed(2) + ' 元'
	}
})




