<template>
  <div class="Tabbar">
    <van-tabbar v-model="active" bind:change="onChange" :route="true" active-color="#ffdb47">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/Category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/Cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/My" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar-item {
  font-size: 13px
}
</style>