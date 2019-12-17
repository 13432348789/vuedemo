<template>
  <div class="index">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <a href="javascript:void(history.go(-1));">
            <img src="../assets/img/back-white.png" width="100%" />
          </a>
        </div>
        <div class="login">购物车</div>
      </div>
    </div>
    <!-- <div v-if="cartDatainfo.length"> -->

    <div class="cars">
      <ul>
        <li v-for="(items,index) in info" :key="index">
          <div class="goods">
            <input
              type="checkbox"
              id="checks"
              @click="CheckItem(items)"
              v-model="items.judge"
              :class="items.judge==true?'active':''"
            />
            <label class="check-labal" for="input"></label >
            <div class="good_img">
              <img :src="items.img" alt />
            </div>
            <div class="good_info">
              <div class="info_name">{{items.title}}</div>
              <div class="num">
                <div class="Plus_minus">
                  <span class="Subtracts" @click="del_add(items,-1)">-</span>
                  <div class="Square_box">
                    <input type="text" value="1" disabled v-model="items.count" />
                  </div>
                  <span class="Plus" @click="del_add(items, +1)">+</span>
                </div>
              </div>
              <div class="price_num">
                <div class="price">￥{{items.price}}</div>
                <div class="good_bottom">
                  <p>
                    小计：
                    <!-- {{items.price*items.count}} -->
                    <span >￥{{items.Subtotal}}</span>
                  </p>
                </div>
                <div class="del_add">
                <div class="delete" @click="onClick(items)">删除</div>
              </div>
              </div>
              
            </div>
            
          </div>
        </li>
      </ul>
    </div>
    <!-- </div> -->
    <!-- <div  v-else  class="toastTxt">购物车为空</div> -->
    <div class="bottom">
      <van-submit-bar :price="totalMoney*100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="allcheck()">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      xiaoji: false,
      value: [],
      item: [],
      checked: false,
      judge: false,
      onSubmit: [],
      temp: [],
      price: 0,
      Subtotal: this.price,
      totalMoney: 0,
      show: false,
      curProduct: " ",
      count: "1",
      info: {}
      // info: [
      //   {
      //     judge: false,
      //     img: require("../assets/img/K47x3ak-MobkAPjvIKG0GA.jpg"),
      //     name: `产地日本 进口松下（Panasonic ）进口剃须刀ES-LV5A-K706(黑色)`,
      //     num: `1`,
      //     price: `290.00`,
      //     Subtotal: `290`
      //   }
      // ]
    };
  },

  methods: {
    //单选按钮
    CheckItem(items) {
      //当括号没有勾选时进入
      items.judge = !items.judge;
      if (items.judge) {
        console.log(items.judge);
        this.temp.push(items.name);
      } else {
        this.index = this.temp.indexOf(items.name);
        this.temp.splice(this.index, 1);
      }
      if (this.temp.length === this.info.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      //选中时修改总价格
      this.calcTotalPrice();
    },
    //全选按钮
    allcheck() {
      // window.console.log("点击了全选按钮")
      if (this.temp.length === this.info.length) {
        this.info.forEach((items, index) => {
          this.info[index].judge = false;
          this.temp = [];
        });
      } else {
        this.temp = [];
        this.info.forEach((items, index) => {
          this.info[index].judge = true;
          this.temp.push(this.info[index].name);
        });
      }
      //选中时修改总价格
      this.calcTotalPrice();
    },

    //商品数量的增加与减少
    del_add(a, b) {
      this.xiaoji = true;
      if (b > 0) {
        let priceadd = 0;
        a.count++;
        priceadd = a.count * a.price;
        // console.log(priceadd)
        a.Subtotal = priceadd;
      } else {
        let priceadd = 0;
        a.count--;
        if (a.count < 1) {
          a.count = 1;
        }
        priceadd = a.count * a.price;
        if (priceadd >= a.price) {
          a.Subtotal = priceadd;
        }
      }
      // 选中时修改总价格
      this.calcTotalPrice();
    },
    calcTotalPrice: function() {
      this.totalMoney = 0; //每次遍历商品之前对总金额进行清零
      this.info.forEach(items => {
        //遍历商品，如果选中就进行加个计算，然后累加
        if (items.judge === true) {
          console.log(items.judge);
          this.totalMoney += items.price * items.count; //累加的
        }
      });
    },
    onClick(items) {
      this.curProduct = items;
      this.$dialog
        .alert({
          //加上标题
          message: "确定删除此商品吗？", //改变弹出框的内容
          showCancelButton: true //展示取水按钮
        })
        .then(() => {
          console.log("点击了确定按钮噢");

          console.log(this.curProduct);
          let index = this.info.indexOf(this.curProduct); //从当前商品列表找到要删除的商品元素

          console.log(index);
          this.info.splice(index, 1);

          // this.cartDatainfo.forEach((items, index) => {

          // });
        })
        .catch(err => {
          console.log(err);
        });
    },
    shopdata() {
      let url = localStorage.getItem("shop");
      console.log(url);
      url = JSON.parse(localStorage.getItem("shop"));
      // for (let i = 0; i < url.length; i++) {
      this.info = url;
      console.log(this.info);

      // }
    }
  },
  created() {
    this.shopdata();
  }

  //  computed:{
  //     ...mapGetters(['cartDatainfo']),//cartDatainfo:购物车列表；

  // }
  // computed: {
  //   value() {
  //     return this.$store.state.cart;
  //   }
  // }
};
</script>
<style lang="scss">
.index {
  width: 100%;
  .header {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 100%;
    background: linear-gradient(#00ccee, #61e7fb);
    .search {
      display: flex;
      position: relative;

      .black_img {
        height: 0.9rem;
        position: relative;
        left: 2.5%;
        line-height: 0.9rem;
        a {
          display: block;
          width: 20px;
          height: 20px;
        }
        img {
          height: 0.4rem;
          vertical-align: middle;
          position: absolute;
          top: 0.25rem;
        }
      }
      .login {
        margin: 0 auto;
        font-size: 15px;
        color: white;
      }
      .crear {
        font-size: 0.3rem;
        color: gray;
        position: absolute;
        right: 0.5rem;
      }
    }
  }
  .cars {
    ul {
      padding: 0px;
      padding: 10px 10px 0px 10px;
      li {
      padding: 5px 5px 4px 5px;
        margin-bottom: 10px;
        position: relative;
        background-color: #fff;
        .goods {
          display: inline-block;
          
          .good_img {
            float: left;
            display: table-cell;
            overflow: hidden;
            width: 2rem;
            height: 2rem;
            background-color: #fff;
            vertical-align: middle;
            text-align: center;
            line-height: 79px;
            margin-left: 20px;
            img {
              max-width: 2rem;
              max-height: 2rem;
              vertical-align: middle;
            }
          }
          .good_info {
            width: 245PX;
            margin-left: 121px;
            .info_name {
              width: 100%;
              height: 40px;
              overflow: hidden;
              line-height: 1.5em;
              color: #000000;
              font-size: 0.346667rem;
              text-overflow: ellipsis;
              white-space: normal;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
            .price_num {
              margin-top: 10px;
              height: 20px;
              line-height: 20px;
              .price {
                display: inline-block;
                font-size: 14px;
                width:50PX;
                color: red;
                float: left;
              }
            }
          }
          .del_add {
            font-size: 14PX;
            color: #999;
            float: right;
            .delete {
            }
          }
          .good_bottom {  
            float: left;
            p {
              font-size: 13PX;
              span {
                color: red;
                margin-left: -7px;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    .van-submit-bar {
      border-top: 1px solid #c3c3c3;
      .van-submit-bar__bar {
        .van-checkbox {
          margin-left: 0.4rem;
        }
      }
    }
  }
  .active {
    background: url(/static/assets/car/02.png) scroll center center no-repeat;
    background-size: 16px;
  }
  .num {
    margin-top: 8px;
    overflow: hidden;
    .Plus_minus {
      border: 1px solid #c3c3c3;
      height: 0.44rem;
      border-radius: 3px;
      overflow: hidden;
      border-right: none;
      border-left: none;
      margin-top: 1px;
      width: max-content;
      float: right;
      line-height: 20px;
      .Subtracts {
        display: inline-block;
        width: 0.56rem;
        height: 0.44rem;
        border: 1px solid #c3c3c3;
        border-bottom: none;
        border-top: none;
        text-align: center;
        background: #fff;
        color: #333;
        // border-radius: 3px 2px 2px 3px;
        float: left;
        font-size: 0.28rem;
      }
      .Square_box {
        float: left;
        padding: 0px;
        line-height: 16px !important;
        input {
          padding: 2px 2px;
          width: 0.72rem;
          color: #313131;
          background-color: #fff;
          text-align: center;
          font-size: 14px;
          vertical-align: text-top;
          border: none;
        }
      }
      .Plus {
        float: left;
        // border-radius: 2px 3px 3px 2px;
        display: inline-block;
        width: 0.56rem;
        height: 0.44rem;
        border: 1px solid #c3c3c3;
        border-bottom: none;
        border-top: none;
        text-align: center;
        font-size: 0.24rem;
      }
    }
  }
}
#checks {
  position: absolute;
  top: 6px;
}
</style>






