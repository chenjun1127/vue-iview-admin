import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import Cookies from 'js-cookie';

export default new Vuex.Store({
  state: {
    users: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '',
    time: new Date().getTime(),
    token: Cookies.get('auth-token') || '',
    tags: [{ icon: 'md-home', name: 'dashboard', path: '/dashboard', title: '首页' }], // 初始化标签页-首页,
    breadcrumb: '' //面包屑
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTags(state, tags) {
      state.tags = tags;
    },
    setBreadcrumb(state, breadcrumb) {
      state.breadcrumb = breadcrumb;
    },
    addTags(state, tagObj) {
      let arr = [...state.tags, tagObj];
      let hash = {};
      // 去除数组里的重复对象
      let newArr = arr.reduce((item, next) => {
        hash[next.name] ? '' : (hash[next.name] = true && item.push(next));
        return item;
      }, []);
      state.tags = newArr;
    },
    removeTag(state, current) {
      state.tags = state.tags.filter(item => item.path !== current);
    }
  },
  actions: {
    // 登录
    handleLogin({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        if (Object.keys(loginInfo).length && loginInfo.token) {
          commit('setUsers', loginInfo);
          commit('setToken', loginInfo.token);
          Cookies.set('auth-token', loginInfo.token, { expires: 1 });
          delete loginInfo.token;
          localStorage.setItem('userInfo', JSON.stringify(loginInfo));
          resolve(loginInfo);
        } else {
          reject('无token验证');
        }
      });
    },
    // 登出
    handleLogOut({ commit }) {
      commit('setUsers', '');
      commit('setToken', '');
      Cookies.remove('auth-token');
      localStorage.removeItem('userInfo');
    },
  }
});
