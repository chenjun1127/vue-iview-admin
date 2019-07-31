<template>
  <div class="layout">
    <Layout>
      <Sider ref="sider" hide-trigger collapsible v-model="collapsed">
        <SideMenu :collapsed="collapsed" :menuList="menus"></SideMenu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="['menu-icon', collapsed ? 'rotate-icon' : '']" type="md-menu" size="24"></Icon>
          <div class="layout-top-bar">
            <div class="top-title">XX后台管理系统</div>
            <FullScreen></FullScreen>
            <div class="user-name">{{ $store.state.users.name }}</div>
            <User></User>
          </div>
        </Header>
        <Tags />
        <Content class="layout-container">
          <transition-group name="fade" mode="out-in">
            <BreadCrumb key="bread-crumb"></BreadCrumb>
            <router-view key="router-view" class="app-router-view"></router-view>
          </transition-group>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from './SideMenu';
import FullScreen from '@/components/FullScreen';
import BreadCrumb from './BreadCrumb';
import User from './User';
import menus from './menus';
import Tags from './Tags';
export default {
  components: { SideMenu, User, FullScreen, BreadCrumb, Tags },
  data() {
    return {
      collapsed: false,
      menus
    };
  },
  methods: {
    collapsedSider() {
      this.$refs.sider.toggleCollapse();
    }
  }
};
</script>
<style scoped lang="scss">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: inset 0px -1px 0px 0px #d8d8d8;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.layout-container {
  background: #f0f2f5;
  min-height: calc(100vh - 66px);
  padding: 15px;
  .app-router-view {
    padding: 15px;
    background: #fff;
    height: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 15px;
    height: calc(100vh - 132px);
  }
}
.menu-icon {
  transition: all 0.3s;
  cursor: pointer;
  margin: 0 15px;
  margin-top: 2px;
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
  .user-name {
    padding-right: 15px;
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
