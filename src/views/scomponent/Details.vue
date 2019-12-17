<template>
  <div class="Details">
    <Dnav />
    <Dswiper :swiper="json"/>
    <productMain :Details="details"/>
    <Dadditional1 />
    <Dadditional2 />
    <div class="product-evaluate">
      <div class="item-info">
        <van-cell class="cell2" is-link>
          <p class="content-header2">评论(1600+)</p>
          <span class="hpl">99%好评率</span>
        </van-cell>
      </div>
    </div>
    <Dpull />

    <div class="guess-like">
            <div class="guess-title">
                <div class="title-img1"></div>
                <div class="title-text">好货推荐</div>
                <div class="title-img2"></div>
            </div>
            <ul class="guess-list">
                <li class="my-show">
                    <a href="#">
                        <div class="guang"></div>
                        <div class="circle circle1">
                            <img src="../../assets/img/201812121023378248_x.jpg" alt="">
                        </div>
                        <div class="circle circle2">
                            <img src="../../assets/img/like1.png" alt="">
                        </div>
                        <div class="circle circle3">
                            <img src="../../assets/img/like2.png" alt="">
                        </div>
                    </a>
                </li>
                <li v-for="(like,index) in likes" :key="index">
                    <a href="#">
                        <img :src="like.img" alt="">
                    </a>
                    <p class="like-name">{{ like.text }}</p>
                    <p class="like-price">
                        {{ like.jq }}
                        <em>{{ like.zs }}</em>
                        {{ like.xs }}
                    </p>
                </li>
            </ul>
            <div class="sn-end-loading"></div>
    </div>

    <backTop />

    <div class="actionbar">
      <div class="action-list">
        <ul class="action-other">
          <li class="item ser"></li>
          <li class="item ser2"></li>
          <li @click="gwc" class="item ser3"></li>
        </ul>
        <a class="item addtocart" >立即购买</a>
        <a class="item buy" @click="btnclick">加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { mapState, mapMutations } from "vuex";
import backTop from "./backTop";
import Dnav from "./Details-component/Dnav"
import Dswiper from "./Details-component/Dswiper"
import productMain from "./Details-component/Dproduct-main"
import Dadditional1 from "./Details-component/Dadditional1"
import Dadditional2 from "./Details-component/Dadditional2"
import Dpull from "./Details-component/Dpull"
export default {
  data() {
    return {
      price:"",
      title:"",
      img:"",
      count:"",
      details:[],
      swiper:[] , 
      json:"" , 
      arr:[],
      likes:[
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    },
                    {
                        img:require("../../assets/img/likes1.jpg"),
                        text:"农夫山泉饮用天然水 婴儿水 母婴水 1L*12箱装",
                        jq:"￥",
                        zs:"89",
                        xs:".90"
                    }
                ]
      // title: [
      //   {
      //     price: "57",
      //     titles:"涵养泉天然饮用矿泉水550ml*24瓶装 天然矿泉水饮用水 饮品瓶装 整箱装 康师傅出品",
      //   }
      // ],
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    this.fun();
    this.Dswipers();
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    gwc () {
      this.$router.push({path:"/Cart"})
    },
    fun() {
      axios.get("/static/Details.json").then(res => {
      let Data  = JSON.parse(JSON.stringify(res.data));


      window.console.log( this.details = Data[this.$route.query.arr]);
      window.console.log(this.$route.query.arr);


        // window.console.log(this.$route.query.arr)
      });
    },
    Dswipers() {
      axios.get("../static/Dswiper.json").then(res => {
        this.swiper = JSON.parse(JSON.stringify(res.data));
        let len = this.$route.query.json;
        this.json = this.swiper[len];
        window.console.log(this.json)

      });
    },
    btnclick() {
      this.$emit("btnclick");
      this.$toast.success({
        message:"已成功加入购物车",
        duration: 2000
      })
      this.price=this.details[0].prices
      this.img=this.swiper[this.$route.query.json][0].img
      this.title=this.details[0].title
      this.count=this.details[0].count
      this.judge = this.details[0].judge
      console.log(this.price);
      console.log(this.img);
      console.log(this.title);
      const{price,img,title,count,judge}=this
      let obj={price,img,title,count,judge}
      console.log(obj)
        if (localStorage.getItem("shop")) {
        this.arr = JSON.parse(localStorage.getItem("shop"))
            for (let i = 0; i < this.arr.length; i++) {
              if(JSON.stringify(obj)==JSON.stringify(this.arr[i])){
                this.$toast("该商品已加入购物车，请不要重复点击")
                return;
              }
        }
      }
      this.arr.push(obj)
      localStorage.setItem("shop",JSON.stringify(this.arr))
        // let cartlist = {};
        // cartlist.img = this.swiper.swiper[0],
        // this.addCart(cartlist);
        // console.log(cartlist.img);
    },
    ...mapMutations(["addCart"])
  },

  computed: {
    ...mapState(["cart"])
  },
  components: {
    backTop,
    Dnav,
    Dswiper,
    productMain,
    Dadditional1,
    Dadditional2,
    Dpull,
    
  }
};
</script>

<style lang="scss" scoped>

.Details {
  position: relative;
  background: #f7f7f7;
  padding-bottom: 50px;
}
.hpl {
  position: absolute;
  right: 0;
  top: 1PX;
  color: #999;
  font-size: 14PX;
}
.product-evaluate {
  margin: 9PX 0 0 !important;
  background: #fff;
}

.actionbar {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50PX;
  width: 100%;
  z-index: 10;
  background: #fff;
}
.action-list {
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-right: 6PX;
  flex-wrap: nowrap;
}
.actionbar .action-other {
  width: 48%;
  height: 49PX;
  line-height: 49PX;
  display: flex;
  overflow: hidden;
  padding-right: 6PX;
  flex-wrap: nowrap;
}
.ser::before {
  content: "";
  width: 51PX;
  height: 50PX;
  background: url(../../assets/img/kefu.png) no-repeat center 0;
  background-size: contain !important;
  display: block;
  margin: 0 auto 2PX;
}
.ser2::before {
  content: "";
  width: 51PX;
  height: 50PX;
  background: url(../../assets/img/dianpu.png) no-repeat center 0;
  background-size: contain !important;
  display: block;
  margin: 0 auto 2PX;
}
.ser3::before {
  content: "";
  width: 51PX;
  height: 50PX;
  background: url(../../assets/img/gouwuche.png) no-repeat center 0;
  background-size: contain !important;
  display: block;
  margin: 0 auto 2PX;
}
.actionbar .item {
  flex: 1;
  flex-basis: 0;
  width: 0;
  padding: 0;
  display: block;
  position: relative;
  text-align: center;
  line-height: 35PX;
  height: 35PX;
  color: #666;
  border-radius: 9PX;
}
.actionbar .addtocart {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  border-radius: 6PX 1PX 1PX 6PX;
  background: #fc0;
  margin: 0 3PX 0 0;
  font-size: 14PX;
  color: #000;
}
.actionbar .buy {
  border-radius: 1PX 6PX 6PX 1PX;
  background: #f60;
  color: #fff;
  font-size: 14PX;
}
.guess-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 13PX;
    height: 30PX;
}
.title-img1, 
.title-img2 {
    width: 28PX;
    height: 6PX;
    background: url(../../assets/img/guessTitle-icon.png) no-repeat;
    background-size: 28PX 6PX;
}
.title-img2 {
    transform: rotateY(180deg);
}
.title-text {
    font-size: 16PX;
    font-weight: bold;
    color: #222;
    margin: 0 13PX;
}
.guess-like {
  margin-top: 10PX;
}
.guess-list {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
}
.guess-list li {
    width: 188PX;
    height: 282PX;
    background: #fff;
    border-radius: .24rem;
    position: relative;
    margin-bottom: 12PX;
}
// .guess-list li:nth-child(odd) {
//     margin-right: 10PX;
// }
.guess-list li.my-show a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/newMy-show.png) no-repeat;
    background-size: cover;
}
.guang {
    width: 71PX;
    height: 71PX;
    background: url(../../assets/img/guang.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 150PX;
    left: 65PX;
}
.guess-list li img {
    display: block;
    width: 188PX;
    height: 188PX;
    border-top-left-radius: .24rem;
    border-top-right-radius: .24rem;
}
.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: circleScale 2s ease-in-out 0.2s;
}
.circle1 {
    width: 79PX;
    height: 79PX;
    background: url(../../assets/img/circle.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 20PX;
    top: 77PX;
}
.circle1 img {
    width: 52PX !important;
    height: 52PX!important;
    border-radius: 50%!important;
}
.circle2 {
    width: 54PX;
    height: 54PX;
    background: url(../../assets/img/circle.png) no-repeat;
    background-size: contain;
    position: absolute;
    right: 13PX;
    top: 73PX;
}
.circle2 img {
    width: 35PX!important;
    height: 35PX!important;
    border-radius: 50%!important;
}
.circle3 {
    width: 58PX;
    height: 58PX;
    background: url(../../assets/img/circle.png) no-repeat;
    background-size: contain;
    position: absolute;
    right: 27PX;
    top: 220PX;
}
.circle3 img {
    width: 38PX!important;
    height: 38PX!important;
    border-radius: 50%!important;
}

.like-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #222;
    font-size: 14PX;
    font-weight: bold;
    margin: 9PX 6PX 0;
}
.like-price {
    color: #F42;
    font-size: 13PX;
    padding: 13PX 6PX 0;
    font-weight: bold;
    height: 19PX;
    line-height: 30PX;
}
.like-price em {
    font-size: 19PX;
    font-weight: bold;
    font-style: normal;
    margin: 0 -5PX;
}
.sn-end-loading {
    width: 230px;
    height: 13px;
    margin: 13px auto;
    background: url(../../assets/img/todown.png) no-repeat;
    background-size: contain;
}
</style>