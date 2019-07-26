<template>
  <div class="layout">
    <Layout>
      <Sider ref="sider" hide-trigger collapsible v-model="collapsed">
        <SideMenu :collapsed="collapsed" :menuList="menus"></SideMenu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="['menu-icon', collapsed ? 'rotate-icon' : '']" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          <div class="layout-top-bar">
            <div class="top-title">XX后台管理系统</div>
            <FullScreen></FullScreen>
            <User></User>
          </div>
        </Header>
        <Content class="layout-container">
          <transition-group name="fade" mode="out-in">
            <Breadcrumb :style="{margin: '16px 0'}" key="Breadcrumb">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <router-view key="r"></router-view>
          </transition-group>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '@/components/layout/SideMenu';
import FullScreen from '@/components/FullScreen';
import User from './User';
import menus from './menus'
export default {
  components: { SideMenu, User, FullScreen },
  data() {
    return {
      collapsed: false,
      menus
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.sider.toggleCollapse();
    },

  }
}
</script>
<style scoped lang="scss" >
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.layout-container {
  margin: 20px;
  background: #fff;
  min-height: calc(100vh - 106px);
}
.menu-icon {
  transition: all 0.3s;
  cursor: pointer;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.layout-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 0;
}
.layout-top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  .top-title {
    flex: 1;
    font-size: 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 500ms ease-out;
  transform: translateX(0);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
