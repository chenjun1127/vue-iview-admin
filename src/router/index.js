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
const LOGIN_PAGE_NAME = 'login';
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  // console.log('to', to.meta);
  iView.LoadingBar.start();
  let token = Cookies.get('auth-token');
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({ name: LOGIN_PAGE_NAME });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next('/dashboard');
  } else {
    const users = store.state.users;
    if (filterPermission(to.meta.permission, users.roleType)) {
      next();
    } else {
      next('/error/403');
    }
  }
});

router.afterEach((to, from, next) => {
  document.title = 'iView-admin-' + to.meta.title || '';
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
