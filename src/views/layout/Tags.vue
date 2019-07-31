<template>
  <div class="tags">
    <div class="tags-scroll">
      <ul class="tags-list">
        <li v-for="item in tags" :class="$route.name === item.name ? 'active' : ''" :key="item.path" @click="handChangeTag(item.path)">
          <span>{{ item.title }}</span>
          <em class="" @click.stop="handRemoveTag(item)">×</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Tags',
  data() {
    return {
      tags: this.$store.state.tags.filter(item => !item.permission) // 过滤没有权限的
    };
  },
  watch: {
    // 监控路由
    $route(to, from) {
      this.tags = this.$store.state.tags.filter(item => !item.permission);
    }
  },
  methods: {
    ...mapMutations(['removeTag']),
    handChangeTag(path) {
      this.$router.push(path);
    },
    handRemoveTag(currentObj) {
      let tagList = this.tags;
      let targetPath = currentObj.path;
      if (this.$route.path === targetPath) {
        tagList.forEach(() => {
          if (targetPath === tagList[tagList.length - 1].path) {
            // 当前页签在最后,删除之后则路由跳转到前一个页签
            this.$router.push(tagList[tagList.length - 2].path);
          } else {
            // 当页页签不是在最后,删除之后则跳转到最后去
            this.$router.push(tagList[tagList.length - 1].path);
          }
          this.removeTag(currentObj.path);
        });
      } else {
        this.removeTag(currentObj.path);
      }
      this.tags = this.$store.state.tags.filter(item => !item.permission);
    }
  }
};
</script>
<style lang="scss">
.tags {
  display: flex;
  margin: 4px 15px;
  margin-bottom: 0;
  .tags-scroll {
    position: relative;
    width: 100%;
    height: 31px;
    .tags-list {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      padding: 0;
      transition: all 0.2s ease-in-out 0s;
      width: 100%;
      li {
        list-style: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d8d8d8;
        padding: 4px 22px;
        position: relative;
        margin-right: 4px;
        word-break: keep-all;
        cursor: pointer;
        &:before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          background: #b1b1b1;
          border-radius: 50%;
          left: 8px;
          top: 12px;
          position: absolute;
        }
        &:first-child {
          em,
          &:before {
            display: none;
          }
        }
        em {
          font-style: normal;
          font-size: 16px;
          margin-left: 4px;
          width: 14px;
          height: 14px;
          position: absolute;
          right: 4px;
          top: 2px;
        }
      }
      .active {
        color: #fff;
        background: linear-gradient(to right, #2187e8, #1890ff);
        border-color: #1890ff;
        &:before {
          background: #fff;
        }
      }
    }
  }
}
</style>
