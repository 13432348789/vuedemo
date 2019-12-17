<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(banner,index) in swiper" :key="index">
        <img :src="banner">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        require("../../assets/img/157485084571124783.jpg"),
        require("../../assets/img/157490447454312573.jpg"),
        require("../../assets/img/157484764424294665.jpg"),
        require("../../assets/img/157484794331362712.jpg")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  background-image: url("../../assets/img/157347464596658252.jpg");
  background-size: 100% 100%;
  font-size: 0
}
img {
  width: 100%;
} 
</style>