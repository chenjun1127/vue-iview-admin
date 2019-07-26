<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心
          <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 30
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout() {
      this.handleLogOut();
      this.$router.push('/login');
    },
    message() {
      this.$router.push('/message')
    },
    handleClick(name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>
<style lang="scss" scope>
.user-avatar-dropdown {
  cursor: pointer;
  .ivu-badge-dot {
    right: -8px;
    top: 25%;
  }
}
</style>
