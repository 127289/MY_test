<template>
    <div class="top-container">
      <van-nav-bar
      :title="activeTitle"
      fixed
    />
    <div>
      <!-- 路由缓存 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
     
    </div>
    <van-tabbar route>
    <van-tabbar-item icon="home-o" replace to="/layout/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/layout/search">我的</van-tabbar-item>
  </van-tabbar>
    </div>
</template>

<script>

export default {
  data() {
    return {
      activeTitle: this.$route.meta.title  //导航标题：拿到当前路由所在信息对象里meta中的title使用
    };
  },
  // 侦听路由变化
  watch: {
    $route(){ // 直接侦听路由对象的任意属性
      // 路由改变时
      this.activeTitle = this.$route.meta.title

    }
  }
};
</script>

<style lang="less" scoped>
.top-container{
  padding: 40px 0 48px 0;
}
</style>