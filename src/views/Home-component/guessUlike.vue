<template>
  <div class="GUL">
    <a class="Gimg" href="#">
      <img src="../../assets/img/154518371251022769.webp" width="100%" />
    </a>
    <!-- <router-link to="/home/Details"> -->
    <div class="list">
       <div class="left-item" v-for="(items,index) in leftitem" :key="index">
        <!-- <a href="#"> -->
          <div class="itemimg" v-on:click="onDetailed(items.swiper , index)">
            <img :src="items.itemimg" width="100%" />
          </div>
          <p class="item-title">{{ items.itemtitle }}</p>
          <p class="cuxiao">
            <span class="zy">{{ items.zy }}</span>
            <span class="cx-text">{{ items.djh }}</span>
          </p>
          <div class="price">
            <div class="prices">
              <span class="flag">{{ items.fh }}</span>
              <span class="pre-price">{{ items.zs }}</span>
              <span class="last-price">{{ items.xs }}</span>
              <span class="price-comments">{{ items.pl }}</span>
            </div>
          </div>
        <!-- </a> -->
      </div>
            <div class="sn-end-loading"></div>

    </div>
      <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftitem: [
        {
          itemimg: require("../../assets/img/K47x3ak-MobkAPjvIKG0GA.webp"),
          itemtitle:
            "涵养泉天然饮用矿泉水550ml*24瓶装 天然矿泉水饮用水 饮品瓶装 整箱装 康师傅出品",
          zy: "自营",
          djh: "满2件打8.5折",
          fh: "￥",
          zs: "57",
          xs: ".9",
          pl: "1600+评论" , 
          swiper:"swiper"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论" , 
          swiper:"swiper2"
        },
        {
          itemimg: require("../../../public/img/Dswiper/743122223384031715849573_x.jpg"),
          itemtitle:
            "石林天外天 云南天然碱性水520*24瓶/1箱矿泉水无汽非苏打水饮料饮用水备孕整箱",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "182",
          xs: ".4",
          pl: "10+评论" , 
          swiper:"swiper3"
        },
        {
          itemimg: require("../../assets/img/dazBNheX5gtsuSuzLGAfVw.webp"),
          itemtitle: "美国进口AMERCOOK 元木麦饭石煎锅不粘锅24cm 家用合金平底锅 煎盘煎饼牛排锅 燃气灶电磁炉通用锅具",
          zy: "自营",
          djh: "领券200-100",
          fh: "￥",
          zs: "199",
          xs: "",
          pl: "3评论" ,
          swiper:"swiper4"
        },
        {
          itemimg: require("../../assets/img/4eivzTSf_cfJyTXZtD_2Xg.webp"),
          itemtitle:
            "【混合口味8袋装】约320克 网红潮流日式风味小圆饼植物油饼干粗粮天日盐饼干零食奶盐味休闲零食 混合口味8袋 约300g",
          zy: "自营",
          djh: "买三送一",
          fh: "￥",
          zs: "8",
          xs: ".9",
          pl: "100+评论" ,
          swiper:"swiper5"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        },
        {
          itemimg: require("../../assets/img/a3NH9raklyDefb_qt7-5Xw.webp"),
          itemtitle:
            "哈尔滨啤酒 小麦王 550ML* 20听 苏格拉宁联名款 整箱装 麦香浓郁 口感顺畅",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "59",
          xs: ".9",
          pl: "1.8万+评论"
        },
        {
          itemimg: require("../../assets/img/201904020134428712_x.webp"),
          itemtitle: "农夫山泉天然饮用水5L*4 整箱装",
          zy: "自营",
          djh: "大聚惠",
          fh: "￥",
          zs: "32",
          xs: ".9",
          pl: "54万+评论"
        }
      ]
    };
  },
  methods: {
    onDetailed(value , index){
      
        this.$router.push({path:"/home/Details" , query:{json:value , arr:"details"+index}});
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
.GUL {
  background: #f7f7f7;
      padding-bottom: 50px;
}
.Gimg {
  width: 360px;
  height: 35px;
  display: block;
  margin: 0 auto;
  padding-top: 10PX;
}
.Gimg img {
  font-size: 0;
  line-height: 0;
}
.list {
  width: 360px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.left-item {
  width: 175px;
  height: 272px;
  background: #fff;
  margin-bottom: 10px;
}
.itemimg {
  width: 175px;
  height: 175px;
  position: relative;
}
.item-title {
  width: 165px;
  height: 35px;
  font-weight: 500;
  font-size: 13px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp: 2;
}
.cuxiao {
  margin: 5px 5px 10px;
}
.zy {
  background: #fc0;
  border-radius: 5px;
  padding: 0 3px;
  margin-right: 5px;
  font-size: 10px;
}
.cx-text {
  border: 1px solid #fb0;
  border-radius: 5px;
  padding: 0 3px;
  margin-right: 5px;
  font-size: 10px;
}
.price {
  height: 20px;
  margin-left: 5px;
}
.prices {
  display: -webkit-flex;
  display: flex;
  font-size: 12px;
  color: #f42;
  font-weight: bold;
  align-items: flex-end;
}
.flag {
  font-size: 12px;
  font-weight: bold;
}
.pre-price {
  font-size: 17px;
  line-height: 18px;
}
.last-price {
  font-size: 12px;
}
.price-comments {
  font-size: 10px;
  color: #999;
  font-weight: normal;
  margin-left: 5px;
  line-height: 15px;
}
.sn-end-loading {
    width: 230px;
    height: 13px;
    margin: 13px auto;
    background: url(../../assets/img/todown.png) no-repeat;
    background-size: contain;
}
</style>