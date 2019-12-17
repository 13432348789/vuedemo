<template>
  <div class="enter">
    <div class="enterO" v-for="(enterO,index) in enter" :key="index">
      <img :src="enterO.img" width="45px" />
      <p class="text">{{enterO.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: [
        {
          img: require("../../assets/img/157165880722181116.jpg"),
          text: "限时抢购"
        },
        {
          img: require("../../assets/img/TB1aHrlklr0gK0jSZFnXXbRRXXa-200-200.png"),
          text: "0元购"
        },
        {
          img: require("../../assets/img/TB1kJMeSCzqK1RjSZPxXXc4tVXa-200-200.png"),
          text: "限时秒杀"
        },
        {
          img: require("../../assets/img/TB1soRHlbY1gK0jSZTEXXXDQVXa-120-120.gif"),
          text: "双11愿望单"
        },
        {
          img: require("../../assets/img/157165889469283916.jpg"),
          text: "便民超市"
        },
        {
          img: require("../../assets/img/157165893790085815.jpg"),
          text: "爆款手机"
        },
        {
          img: require("../../assets/img/157165895671653077.jpg"),
          text: "生活家电"
        },
        {
          img: require("../../assets/img/157165891799364137.jpg"),
          text: "一起拼购"
        },
        {
          img: require("../../assets/img/TB18l5SiHvpK1RjSZPiXXbmwXXa-86-86.png"),
          text: "限时热卖"
        },
        {
          img: require("../../assets/img/157165908511134313.jpg"),
          text: "领券中心"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.enter {
  width: 100%;
  background: #fff;
  background-image: url("../../assets/blue/157485618101059971.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 12px;
}
.enterO {
  width: 20%;
  height: 68px;
  text-align: center;
  padding: 12px 0 0 0;
}
.text {
  font-size: 12px;
  color: white;
}
</style>