<template>
  <view>
    <!-- 用户未登录时，显示登录组件 -->
    <my-login v-if="!token"></my-login>
    <!-- 用户登录后，显示用户信息组件 -->
    <my-userinfo v-else></my-userinfo>
    <!-- <my-userinfo ></my-userinfo> -->
    <!-- 176  如果是登录失败的话，在使用updataToken，传递参数时随便传一个字符串就可以了.这样就可以进入我的界面了 -->
  </view>
</template>

<script>
  // 导入自己封装的 mixin 模块
  import badgeMix from '@/mixins/tabbar-badge.js'
  // 1. 从 vuex 中按需导入 mapState 辅助函数
  import {
    mapState
  } from 'vuex'
  export default {
    // 将 badgeMix 混入到当前的页面中进行使用
    mixins: [badgeMix],
    data() {
      return {

      };
    },
    computed: {
      // 2. 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token']),
    },
  }
</script>

<style lang="scss">
page,
.my-container {
  height: 100%;
}
</style>
