<template> 
  <div class="product-main">
    <div v-for="(info,index) in this.Details" :key="index">
      <div class="product-price">
        <p class="price-now">
          <span class="i">{{ info.fuhao }}</span>
          <span class="span">{{info.prices}}</span>
          <span class="i">{{ info.pricesxs }}</span>
        </p>
      </div>
      <a class="vip-mode" href="#">
        <div class="vip-info-main">
          <div class="vip-info-price">
            <span class="vip-info-icon"></span>
            <div class="vip-info-con">{{ info.vip }}</div>
          </div>
        </div>
        <div class="vip-info-more">{{ info.kaitong }}</div>
      </a>
      <div class="product-title">
        <h1 class="name" >
          <i>{{ info.ziying }}</i>
          {{info.title}}
        </h1>
        <div class="favirot"></div>
      </div>
      <div class="blinkword">
        {{ info.dian }}
        <span class="jg"></span>{{ info.suanshui }}
        <span class="jg"></span>{{ info.dian }}
        <span class="jg"></span>{{ info.shuiyuan}}
      </div>
      <div class="product-sub">
        <p id="product-sub">{{ info.sub }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["Details"],
  created() {
    window.console.log(this.Details)
  }
};
</script>

<style lang="scss" scoped>
.product-main {
  overflow: hidden;
  padding: 12PX;
  background: #fff;
}
.price-now {
  color: #f42;
  font-size: 24PX;
  display: inline-block;
}
.price-now .i {
  font-size: 16PX;
}
.vip-mode {
  display: flex;
  margin: 0 auto;
  border-radius: 10PX;
  padding: 5PX 12PX;
  margin: 0 0 0.1rem;
  background: #f6f6f6;
}
.vip-info-main {
  flex: 1 1 0;
  margin: 0;
  width: 0;
  padding: 0.08rem 0.08rem 0.05rem 0;
}
.vip-info-price {
  display: flex;
  font-size: 13PX;
  color: #222;
  align-items: flex-end;
}
.vip-info-icon {
  display: block;
  width: 40PX;
  height: 20PX;
  position: relative;
  top: -0.02rem;
  background: url("../../../assets/img/vip-info-icon2.gif");
  background-size: contain;
}
.vip-info-con {
  flex: 1;
  margin: 0 0 0 5PX;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vip-info-more {
  padding: 6PX 0 0 12PX;
  font-size: 12PX;
  width: auto;
  color: #222;
  background: none;
  position: relative;
}
.product-title {
  display: flex;
  position: relative;
}
.name {
  flex: 1;
  margin-bottom: 8PX;
  padding-right: 10PX;
  font-size: 16PX;
  font-weight: 700;
  color: #222;
}
.name i {
  display: inline-block;
  padding: 1PX 5PX 0;
  background: #fc0;
  color: #222;
  border-radius: 3PX;
  font-size: 9PX;
  vertical-align: 2PX;
  margin-right: 5PX;
  line-height: 15PX;
  font-style: normal;
}
.favirot {
  width: 30PX;
  height: 30PX;
  background: url(../../../assets/img/guanzhu.png) no-repeat 0 0;
  background-size: 30PX 30PX;
}
.blinkword {
  font-size: 13PX;
  color: #222;
  background: #fff;
  margin-bottom: 13PX !important;
}
.jg {
  display: inline-block;
  width: 10PX;
}
.product-sub p {
  font-size: 13PX;
  line-height: 16px;
  color: #999;
}
</style>