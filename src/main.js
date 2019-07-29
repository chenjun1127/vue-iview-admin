import Vue from 'vue';
import App from './App.vue';
import Bus from './assets/js/bus';
import './plugins/iview';
import router from './router';
import './assets/css/reset.css';
import './assets/css/common.scss';
import './assets/css/iconfont/iconfont.css';
import './assets/css/theme/index.less';
import store from './store';
Vue.config.productionTip = false;

new Vue({
  data: { Bus },
  store,
  router: router,
  render: h => h(App)
}).$mount('#app');
