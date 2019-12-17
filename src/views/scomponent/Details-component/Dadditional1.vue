<template>
  <div class="additional-info">
    <div class="item-info">
      <van-cell class="cell" is-link @click="showPopup">
        <span class="info-label">优惠</span>
        <div class="info-content">
          <p class="content-header">还差1.00件参加满减活动</p>
          <div class="trigger">
            <p>
              <label class="price">SUPER专享</label>
              <label class="desc">满5用5</label>
            </p>
          </div>
          <p class="trigger2">
            <span class="desc">满减</span>
            <span class="promotion-txt">满2件打8折</span>
          </p>
          <p class="trigger2">
            <span class="desc">云钻促销</span>
            <span class="promotion-txt">普通会员立返17云钻</span>
          </p>
          <p class="trigger2">
            <span class="desc">实名领券</span>
            <span class="promotion-txt">实名认证领10元支付券</span>
          </p>
        </div>
      </van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">优惠</van-popup>
    </div>
    <div class="item-info">
      <van-cell class="cell2" is-link @click="showPopup2">
        <span class="info-label">刮券</span>
        <div class="info-content">
          <p class="content-header">100%刮中券，最高50元无敌券</p>
        </div>
      </van-cell>
      <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }">刮券</van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    showPopup2() {
      this.show2 = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-coupon-list {
  height: 400PX;
}
.additional-info {
  margin: 9PX 0 0 !important;
  background: #fff;
}
.cell {
  padding: 9PX 10PX !important;
  height: 150PX;
}
.cell2 {
  padding: 9PX 10PX !important;
}
.cell3 {
  height: 60PX;
  padding: 9PX 10PX !important;
}
.cell4 {
  height: 90PX;
  padding: 9PX 10PX !important;
}
.item-info {
  position: relative;
}
.item-info .info-label {
  height: 24PX;
  line-height: 24PX;
  display: inline-block;
  color: #999;
  font-size: 13PX;
}
.info-content {
  width: 80%;
  position: absolute;
  top: -1PX;
  left: 36PX;
  font-size: 13PX;
}
.info-content2 {
  width: 80%;
  position: absolute;
  top: 8PX;
  left: 45PX;
  font-size: 13PX;
}
.content-header {
  padding-top: 2PX;
}
.trigger {
  position: relative;
  height: 20PX;
  font-size: 10PX;
  line-height: 10PX;
  margin: 3PX 0 7PX;
}
.price {
  padding: 3PX 4PX;
  height: 100%;
  display: inline-block;
  background: #fc0;
  border-radius: 5PX;
  margin-right: 5PX;
}
.desc {
  padding: 3PX 4PX;
  display: inline-block;
  border: 1PX solid #fc0;
  border-radius: 5PX;
  margin-right: 5PX;
}
.trigger2 {
  position: relative;
  height: 20PX;
  font-size: 10PX;
  line-height: 10PX;
  margin-bottom: 7PX;
}
.promotion-txt {
  margin: 0 20PX 0 6PX;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content-header2 {
  padding-top: 2PX;
  font-weight: 700;
  color: #222;
}
.promotion-txt2 {
  font-size: 13PX;
}
.content-header3 {
  padding-top: 2PX;
  font-size: 14PX;
}
</style>