<template>
  <header>
    <div class="nav" :class="searchBarFixed == true ? 'isFixed' :''">
      <div class="details-nav" :class="searchBarFixed == true ? 'details-navs' :''">
        <div class="nav-back">
          <a href="javascript:void(history.go(-1));">
            <img class="navimg" src="../../../assets/img/nav-back.png">
          </a>
        </div>
        <div class="nav-main" :class="searchBarFixed == true ? 'main' :''">
          <span>商品详情</span>
        </div>
        <div class="nav-action">
          <van-cell class="zzc" @click="xianshi">
            <img class="navimg" src="../../../assets/img/nav-more.png" alt>
          </van-cell>
          <van-popup class="daohang" v-model="daohang">
            <div class="dh-content">快速导航</div>
            <ul>
              <li @click="sy">
                <a class="home-icon" href="#">首页</a>
              </li>
              <li @click="gwc">
                <a class="home-icon" href="#">购物车</a>
              </li>
              <li @click="ss">
                <a class="home-icon" href="#">搜索</a>
              </li>
              <li @click="fl">
                <a class="home-icon" href="#">全部分类</a>
              </li>
              <li @click="wd">
                <a class="home-icon" href="#">我的易购</a>
              </li>
            </ul>
          </van-popup>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    data () {
        return {
            searchBarFixed: false,
            daohang: false
        }
    },
    methods: {
        sy() {
        this.$router.push({ path: "/home" });
        },
        gwc() {
        this.$router.push({ path: "/Cart" });
        },
        ss() {
        this.$router.push({ path: "/Search" });
        },
        fl() {
        this.$router.push({ path: "/Category" });
        },
        wd() {
        this.$router.push({ path: "/mine" });
        },
        xianshi() {
        this.daohang = true;
        },
        handleScroll() {
          var scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          var offsetTop = document.querySelector(".nav").offsetTop;
          if (scrollTop > offsetTop) {
            this.searchBarFixed = true;
          } else {
            this.searchBarFixed = false;
          }
        }
    },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
.isFixed {
  position: fixed;
  background: #fff !important;
  top: 0;
  z-index: 999;
}
header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.nav {
  width: 100%;
  height: 50PX;
}
.details-nav {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 2%, transparent);
  position: relative;
  height: 50PX;
  line-height: 63PX;
  font-size: 17PX;
  z-index: 9;
}
.details-navs {
  width: 100%;
  background: none;
  position: relative;
  height: 50PX;
  line-height: 63PX;
  font-size: 17PX;
  z-index: 9;
}
.nav-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 30PX;
  height: 50PX;
  padding-left: 10PX;
}
.navimg {
  width: 30PX;
  height: 30PX;
  line-height: 0;
  font-size: 0;
}
.daohang {
  width: 370PX;
  max-height: 250PX;
  position: absolute;
  top: 170PX;
  left: -167PX;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-left: 20PX;
  border-radius: 10PX;
}
.dh-content {
  font-size: 15PX;
  color: #222;
}
.daohang ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 0 0 -13PX;
}
.daohang li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #666;
  padding: 26PX 0 0;
  font-size: 13PX;
  text-align: center;
  background-size: 24PX 24PX !important;
  background-position: center 16PX !important;
  background-repeat: no-repeat !important;
}
.daohang li a.home-icon {
  background-image: url(../../../assets/img/nav-index.png);
}
.daohang li {
  width: 72PX;
  height: 70PX;
  border-radius: 6PX;
  margin: 0 0 12PX 12PX;
  text-align: center;
  position: relative;
  font-size: 14PX;
  overflow: hidden;
  background: #f7f7f7;
}
.nav-main {
  margin: 0 60PX;
  line-height: 45PX;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  z-index: 11;
  display: none;
}
.main {
  display: block;
}
.nav-action {
  position: absolute;
  top: 0;
  right: 0;
  width: 30PX;
  height: 50PX;
  padding-right: 10PX;
}
.zzc {
  padding: 0;
  background: none;
  line-height: 63PX;
}
</style>