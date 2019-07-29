<template>
  <ul class="app-breadcrumb">
    <template v-if="tags.parent && tags.parent.length>0">
      <template v-for="item in tags.parent">
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
      <router-link :to="{ path: `${tags.path}`}">
        <Icon v-if="tags.icon" :type="tags.icon"></Icon>
        {{tags.title}}
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
      tags: this.$store.state.tags
    }
  },
  watch: {
    // 监控路由
    $route(to, from) {
      this.tags = this.$store.state.tags
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
