<template>
  <ul class="app-breadcrumb">
    <template v-if="breadcrumb.parent && breadcrumb.parent.length>0">
      <template v-for="item in breadcrumb.parent">
        <li :key="item.path">
          <template>
            <Icon v-if="item.icon" :type="item.icon"></Icon>
            {{item.title}}
            <span>/</span>
          </template>
        </li>
      </template>
    </template>
    <li>
      <router-link :to="{ path: `${breadcrumb.path}`}">
        <Icon v-if="breadcrumb.icon" :type="breadcrumb.icon"></Icon>
        {{breadcrumb.title}}
        <span>/</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
      breadcrumb: this.$store.state.breadcrumb
    }
  },
  watch: {
    // 监控路由
    $route(to, from) {
      this.breadcrumb = this.$store.state.breadcrumb
    }
  }
}
</script>
<style lang="scss" scope>
.app-breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  li,a {
    display: flex;
    align-items: center;
    margin-right: 5px;
    i {
      margin-right: 4px;
      color: rgba(0, 0, 0, 0.55);
    }
    span {
      margin-left: 5px;
    }
    &:last-child span {
      display: none;
    }
  }
}
</style>
