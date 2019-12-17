<template>
  <div class="Category">
    <div class="nav">
      <div class="nav-back">
        <a href="javascript:void(history.go(-1));">
          <img src="../assets/img/back.png" width="100%" />
        </a>
      </div>
      <div class="nav-inp" @click="tzss">
        <a class="search-icon" href="#"></a>
        <a class="search-url" href="#">搜索商品或店铺</a>
      </div>
    </div>
    <div class="list-box">
      <div class="list-nav">
        <ul>
          <li
            @click="btn(index)"
            :class="{active:index === actives}"
            v-for="(lis,index) in navlist"
            :key="index"
          >{{ lis }}</li>
        </ul>
      </div>
      <div class="list-con">
        <div class="commodity-type">
          <ul>
            <li @click="List" v-for="(value,index) in class_arr" :key="index">
              <img :src="value.img" />
              <em>{{ value.text }}</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actives: 0,
      navlist: [
        "热门推荐",
        "手机数码",
        "大家电",
        "电脑办公",
        "厨卫大电",
        "生活家电",
        "食品酒水",
        "品质男装",
        "家居家纺",
        "运动户外",
        "居家生活",
        "珠宝首饰",
        "家装建材",
        "厨具水具",
        "二手优品"
      ],
      comlist: [
        [
          {
            img: require("../assets/img/ctype1.jpg"),
            text: "空调"
          },
          {
            img: require("../assets/img/ctype2.jpg"),
            text: "电视"
          },
          {
            img: require("../assets/img/ctype3.jpg"),
            text: "洗衣机"
          },
          {
            img: require("../assets/img/ctype4.jpg"),
            text: "小biu"
          },
          {
            img: require("../assets/img/ctype5.jpg"),
            text: "取暖器"
          },
          {
            img: require("../assets/img/ctype6.jpg"),
            text: "生活家电"
          },
          {
            img: require("../assets/img/ctype7.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/ctype8.jpg"),
            text: "热水器"
          },
          {
            img: require("../assets/img/ctype9.jpg"),
            text: "笔记本"
          },
          {
            img: require("../assets/img/ctype10.jpg"),
            text: "手表"
          },
          {
            img: require("../assets/img/ctype11.jpg"),
            text: "羽绒服"
          },
          {
            img: require("../assets/img/ctype12.jpg"),
            text: "奶粉"
          },
          {
            img: require("../assets/img/ctype13.jpg"),
            text: "白酒"
          },
          {
            img: require("../assets/img/ctype14.jpg"),
            text: "运动卫衣"
          },
          {
            img: require("../assets/img/ctype15.jpg"),
            text: "大闸蟹"
          }
        ],
        [
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          },
          {
            img: require("../assets/img/156034266353548220.jpg"),
            text: "手机"
          }
        ],
        [
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },

          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          },
          {
            img: require("../assets/img/1495781596391_app_wap_list.png"),
            text: "4k超高清"
          }
        ],
        [
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },

          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          },
          {
            img: require("../assets/img/1493947041765_app_list.jpg"),
            text: "一体机"
          }
        ],
        [
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          },
          {
            img: require("../assets/img/1502197591805_imgApp_tmndir.jpg"),
            text: "商用电器"
          }
        ]
      ],
      index_list: 0
    };
  },
  methods: {
    btn(index) {
      this.index_list = index;
      this.actives = index;
    },
    tzss() {
      this.$router.push({
        path: "/Search"
      });
    },
    List() {
      this.$router.push({
        path: "/List"
      });
    }
  },
  computed: {
    class_arr() {
      return this.comlist[this.index_list];
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #353d44;
}
ul {
  list-style: none;
}
.Category {
}
.nav {
  width: 100%;
  height: 45px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: #f8f8f8;
  box-shadow: 0 1px 1px #dcdcdc;
}
.nav-back {
  width: 25px;
  height: 25px;
  display: block;
  font-size: 0;
  line-height: 0;
  padding: 10px;
}
.nav-back a {
  display: block;
}
.nav-inp {
  width: 83%;
  height: 28px;
  border: 1px solid #ccc;
  position: absolute;
  display: flex;
  align-items: center;
  top: 7px;
  left: 45px;
  border-radius: 5px;
}
.search-icon {
  display: block;
  width: 15px;
  height: 15px;
  background: url("../assets/img/search-icon3.png") no-repeat;
  background-size: 100%;
  margin: 6px 7px;
}
.search-url {
  display: block;
  font-size: 14.5px;
  color: #cacaca;
}
.list-box {
  width: 100%;
  margin-top: 45px;
}
.list-nav {
  width: 100px;
  position: fixed;
  top: 45px;
  left: 0;
  z-index: 0;
  height: calc(100vh - 45px);
  overflow-y: scroll;
}

.list-nav ul li {
  width: 97px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-left: 2px solid #f7f7f7;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  color: #666;
  font-size: 13px;
  background: #f7f7f7;
}
.list-nav ul li.active {
  color: #ff6600;
  border-right: none;
  border-left: 2px solid #ff6600;
  font-size: 14px;
  background: #fff;
}
.list-con {
  margin-left: 95px;
  padding: 10px;
  background: #fff;
  height: 90vh;
}
// .title {
//   color: #ff6600;
//   font-size: 13px;
//   text-align: center;
//   margin: 20px auto 20px;
// }
.commodity-type ul {
  overflow: hidden;
}
.commodity-type ul li {
  width: 85px;
  height: 90px;
  margin-top: 10px;
  float: left;
}
.commodity-type ul li {
  display: block;
}
.commodity-type ul li em {
  display: block;
  white-space: nowrap;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  font-weight: normal;
  font-style: normal;
}
.commodity-type ul li img {
  width: 60px;
  height: 60px;
  margin: 0 15px 5px 15px;
}
</style>