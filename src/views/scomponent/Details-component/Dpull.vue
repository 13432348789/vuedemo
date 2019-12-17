<template>
  <div class="pull-detail">
    <div class="detail-desc">
      <div class="detail-nav-wrap">
        <div class="detail-nav">
          <h2 class="fourth-cells">
            <div class="fourth-cell">
              <ul class="cell-p">
                <li
                  :class="flag==index?'lunhuan':''"
                  @click="handel(index)"
                  v-for="(cell,index) in cells"
                  :key="index"
                >{{ cell.text }}</li>
                <!-- <li>规格参数</li>
                <li>包装售后</li>-->
              </ul>
            </div>
          </h2>
        </div>
      </div>
      <div class="content-detail">
        <div class="content" :class="flag==0?'actives':''">
          <div class="lazyimg">
            <p>
              <img src="../../../assets/img/138942960012817357368843.jpg" width="100%">
            </p>
          </div>
        </div>
        <div :class="flag==1?'actives':''" class="content">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="商品参数" name="1">
              <div class="content-desc">
                <ul>
                  <li>主体</li>
                  <li>
                    <div>品牌</div>
                    <div>康师傅</div>
                  </li>
                  <li>
                    <div>类别</div>
                    <div>矿泉水</div>
                  </li>
                  <li>
                    <div>国产/进口</div>
                    <div>国产</div>
                  </li>
                  <li>
                    <div>产地</div>
                    <div>中国大陆</div>
                  </li>
                  <li>
                    <div>包装</div>
                    <div>瓶子</div>
                  </li>
                  <li>
                    <div>包装件数</div>
                    <div>24</div>
                  </li>
                  <li>
                    <div>保质期</div>
                    <div>540天</div>
                  </li>
                  <li>
                    <div>储存方法</div>
                    <div>避震,常温,避光,通风,干燥</div>
                  </li>
                </ul>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
        <div :class="flag==2?'actives':''" class="content">
          <van-collapse v-model="activeNames2">
            <van-collapse-item title="包装清单" name="1">暂无数据</van-collapse-item>
            <van-collapse-item title="售后服务" name="2">暂无数据</van-collapse-item>
            <van-collapse-item
              title="特别声明"
              name="3"
            >本站苏宁自营商品的商品详情信息及包装参数信息均由供应商自行设计、制作并通过苏宁向其开放的数据端口自行发布，其真实性、准确性和合法性由供应商负责。本站保证苏宁自营商品均为正品，但因生产厂家可能会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保用户收到的货物与本站展示的图片、产地、附件说明完全一致。</van-collapse-item>
            <van-collapse-item title="价格说明" name="4">
              <p>划线价：商品展示的划线价，可能是品牌专柜标价、品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
              <p>折扣：如无特殊说明，折扣指销售商在划线价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>
              <p>异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      activeNames: ["1"],
      activeNames2: ["1"],
      cells: [
        {
          text: "商品详情"
        },
        {
          text: "规格参数"
        },
        {
          text: "包装售后"
        }
      ]
    };
  },
  methods: {
    handel(index) {
      this.flag = index;
      console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-desc {
  width: 100%;
  overflow: hidden;
}
.detail-nav-wrap {
  height: 41PX;
}
.detail-nav {
  background: #fff;
  margin-top: 10PX;
  width: 100%;
  height: 41PX;
  overflow: hidden;
}
.fourth-cells {
  font-size: 14PX;
  text-align: center;
}
.fourth-cell {
  display: flex;
  padding: 0;
}
.cell-p {
  font-size: 14PX;
  flex: 1;
}
.cell-p li {
  display: inline-block;
  height: 39PX;
  font-size: 14PX;
  border-bottom: 3PX solid #fff;
  line-height: 39PX;
  margin: 0 7PX;
}
.content-detail {
  width: 100%;
  display: flex;
  background: #fff;
  padding-top: 10PX;
  overflow: hidden;
}
.content {
  flex: 1;
  display: none;
}
.lunhuan {
  color: #f60;
}
.actives {
  width: 100%;
  height: auto;
  display: block;
}
.content-desc ul li {
  display: -webkit-box;
  margin-bottom: 5PX;
}
.content-desc ul li > div:first-child {
  width: 30%;
  text-align: left;
}
.content-desc ul li > div:nth-child(2) {
  width: 50%;
  text-align: left;
}
</style>