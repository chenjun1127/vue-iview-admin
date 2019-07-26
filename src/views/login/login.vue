<template>
  <div class="login">
    <div class="login-container">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-container">
          <LoginForm @on-success-valid="handleSubmit"></LoginForm>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LoginForm from '@/components/loginForm/LoginForm';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapState(['time'])
  },
  methods: {
    ...mapActions(['handleLogin']),
    handleSubmit({ userName, password }) {
      console.log(this);
      // 模拟一个假的登录
      const infoObj = { name: '普通用户', roleType: 0 }
      this.handleLogin(Object.assign({}, { userName, password }, infoObj, { token: 'sessionid-' + this.time }))
        .then(res => {
          this.$router.push('/dashboard');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background: #232741;
  .login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;

    .form-container {
      padding: 10px 0 0;
    }

    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>
