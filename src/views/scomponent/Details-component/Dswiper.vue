<template>
  <div class="swiper">
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(banner,index) in this.swiper" :key="index">
        <img :src="banner.img" width="100%">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/5</div>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  props:["swiper"] ,
  methods: {
    onChange(index) {
      this.current = index;
    }
  } , 
  created(){
    window.console.log(this.swiper);
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  position: relative;
  z-index: 8;
  font-size: 0;
  line-height: 0;
}
.custom-indicator {
  position: absolute;
  width: 18PX;
  height: 10PX;
  line-height: 10PX;
  text-align: center;
  right: 5PX;
  bottom: 10PX;
  background-color: #999;
  color: #fff;
  border-radius: 5PX;
  padding: 3PX 5PX;
  font-size: 10PX;
}
</style>