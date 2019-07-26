import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import Cookies from 'js-cookie';
Vue.use(Router);
import routes from './routes';
import store from '@/store';
import { filterPermission } from '@/libs/utils';
const router = new Router({
  routes: routes
});
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  console.log('to', to.meta);
  iView.LoadingBar.start();
  if (to.path === '/login') {
    next();
  } else {
    let token = Cookies.get('auth-token');
    if (!token) {
      next('/login');
    } else {
      console.log('登录了，有token', store);
      const users = store.state.users;
      if (filterPermission(to.meta.permission, users.roleType)) {
        next();
      } else {
        next('/error/401');
      }
    }
  }
});

router.afterEach((to, from, next) => {
  document.title = 'iView-admin-' + to.meta.title || '';
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
