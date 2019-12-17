<template>
  <div class="bigcart">
    <div class="carto">
      <div class="lcart" v-for="(lcarts,index) in lcart" :key="index">
        <div class="title">{{ lcarts.title }}</div>
        <div class="titletext">{{ lcarts.titletext }}</div>
        <ul>
          <li class="item1">
            <a href="#">
              <img width="100%" :src="lcarts.itemimg1" />
            </a>
          </li>
          <li class="item2">
            <a href="#">
              <img width="100%" :src="lcarts.itemimg2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lcart: [
        {
          title: "畅销家用空调榜",
          titletext: "卖爆1733件",
          itemimg1: require("../../assets/img/0000000000000000000125972453.jpg"),
          itemimg2: require("../../assets/img/18394c72f00d42db8361035cf1fc2941.jpg")
        },
        {
          title: "婴童服饰穿搭榜",
          titletext: "卖爆312件",
          itemimg1: require("../../assets/img/0070143384000000000818494128.jpg"),
          itemimg2: require("../../assets/img/18b36cd91aa14b5582ea02e948dd3833.jpg")
        },
        {
          title: "时尚保鲜冰箱榜",
          titletext: "本周趋势上升153%",
          itemimg1: require("../../assets/img/0000000000000000000128086781.jpg"),
          itemimg2: require("../../assets/img/6995642cbf484e32a000f7cc110ebaea.jpg")
        },
        {
          title: "人气手机榜",
          titletext: "卖爆6277件",
          itemimg1: require("../../assets/img/96ca1529e3da40d3b629bf2326992936.jpg"),
          itemimg2: require("../../assets/img/025e32ae9b724a978651736fcb0fb1be.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
.bigcart {
  padding-top: 10PX;
  background:rgb(33, 100, 231);
}
.carto {
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.lcart {
  width: 177px;
  height: 135px;
  background: #fff;
  margin-bottom: 7px;
  border-radius: 5px
}
.lcart:nth-child(3) {
  margin-bottom: 0px;

}
.lcart:nth-child(4) {
  margin-bottom: 0px;

}
.lcart .title {
  font-weight: 700;
  font-size: 14px;
  margin: 10px 0 0 10px;
}
.lcart .titletext {
  font-size: 13px;
  color: #999;
  margin: 0px 0 0 10px;
}
ul {
  display: flex;
  justify-content: space-around;
}
.item1 {
  width: 66px;
  height: 82px;
  position: relative;
}
.item2 {
  width: 66px;
  height: 82px;
  position: relative;
}
</style>