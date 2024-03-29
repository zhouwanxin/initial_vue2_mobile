import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'amfe-flexible';

// vant-ui入口文件
import '@/utils/vant-ui';

// 引入自定义less
import '@/assets/style/main.less';

// px转rem方法
import pxToRem from '@/utils/pxToRem';

// 清除keepAlive缓存状态
import removeKeepAlive from '@/utils/removeKeepAlive';



import moment from "moment";
moment.locale('zh-cn');

Vue.config.productionTip = false;


Vue.prototype.$moment = moment;
Vue.prototype.$pxToRem = pxToRem;
Vue.prototype.$removeKeepAlive = removeKeepAlive;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
