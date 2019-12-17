<template>
  <div class="additional-info">
    <div class="item-info">
      <van-cell class="cell2" is-link @click="showPopup3">
        <span class="info-label">已选</span>
        <div class="info-content">
          <p class="content-header2">1件</p>
        </div>
      </van-cell>
      <van-popup v-model="show3" position="bottom" :style="{ height: '40%' }">商品规格</van-popup>
    </div>
    <div class="item-info">
      <van-cell class="cell3" is-link @click="showPopup4">
        <span class="info-label">送至</span>
        <div class="info-content">
          <p class="content-header3">广东 广州 天河区 全区</p>
          <p class="trigger2">
            <span class="promotion-txt2">现货，23:00前付款，预计明天前送达</span>
          </p>
        </div>
      </van-cell>
      <van-popup v-model="show4" position="bottom" :style="{ height: '40%' }">地址</van-popup>
    </div>
    <div class="item-info">
      <van-cell class="cell2" is-link @click="showPopup5">
        <span class="info-label">重量</span>
        <div class="info-content">
          <p class="content-header2">14.8kg</p>
        </div>
      </van-cell>
      <van-popup v-model="show5" position="bottom" :style="{ height: '40%' }">重量说明</van-popup>
    </div>
    <div class="item-info">
      <div class="cell2">
        <span class="info-label">付款</span>
        <div class="info-content2">
          <p class="content-header3">支持 易付宝 支付宝</p>
        </div>
      </div>
    </div>
    <div class="item-info">
      <van-cell class="cell4" is-link @click="showPopup6">
        <ul>
          <li class="serviceInfo">准时到达</li>
          <li class="serviceInfo">次日到达</li>
          <li class="serviceInfo">自提</li>
          <li class="serviceInfo">运费5元，满86元免基础运费（60.00kg内）</li>
          <li class="serviceInfo">商品保管说明</li>
          <li class="serviceInfo">7天无理由退货</li>
        </ul>
      </van-cell>
      <van-popup v-model="show6" position="bottom" :style="{ height: '40%' }">基础服务</van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show3: false,
      show4: false,
      show5: false,
      show6: false
    };
  },
  methods: {
    showPopup3() {
      this.show3 = true;
    },
    showPopup4() {
      this.show4 = true;
    },
    showPopup5() {
      this.show5 = true;
    },
    showPopup6() {
      this.show6 = true;
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
.item-info ul {
  overflow: hidden;
}
.serviceInfo::before {
  content: "";
  display: inline-block;
  width: 12PX;
  height: 12PX;
  background: url(../../../assets/img/normal-support.png) no-repeat 0 0;
  margin-right: 2PX;
  background-size: 12PX 12PX;
}
.serviceInfo {
  float: left;
  margin-right: 8PX;
  font-size: 13PX;
}
</style>