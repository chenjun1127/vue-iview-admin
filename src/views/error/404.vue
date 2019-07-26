<template>
  <Row class="error-container">
    <i-col span="12" class="error-img">
      <img :src="src" alt="404" />
    </i-col>
    <i-col span="12" class="error-box">
      <h1>403</h1>
      <h2>Sorry! 你没有权限访问该页面！</h2>
      <Button type="primary" shape="circle" size="large" @click="goBack">返回首页</Button>
    </i-col>
  </Row>
</template>
<script>
import './error.scss';
export default {
  name: 'error404',
  data() {
    return {
      src: require('@/assets/svg/404.svg')
    }
  },
  methods: {
    goBack() {
      this.$router.push('/dashboard');
    }
  }
}
</script>

