<template>
  <div class="Search">
    <div class="nav">
      <div class="nav-back">
        <a href="javascript:void(history.go(-1));">
          <img src="../../assets/img/back.png" width="100%" />
        </a>
      </div>
      <div class="nav-inp">
        <a class="search-icon" href="#"></a>
        <input class="search-url" href="#" placeholder="搜索商品或店铺" />
      </div>
      <a class="sa" href="#">搜索</a>
    </div>
    <div class="jg"></div>
    <div class="wrap">
      <div class="rc-wrap">
        <p class="title">热门搜索</p>
        <ul>
          <li v-for="(rc,index) in searchlist" :key="index">{{ rc.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchlist: [
        {
          text: "电热毯"
        },
        {
          text: "帮宝适纸尿裤"
        },
        {
          text: "手机"
        },
        {
          text: "电视"
        },
        {
          text: "洗衣机"
        },
        {
          text: "笔记本"
        },
        {
          text: "茅台"
        },
        {
          text: "热水器"
        },
        {
          text: "手表"
        },
        {
          text: "微波炉"
        },
        {
          text: "三只松鼠"
        },
        {
          text: "奶粉"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.jg {
  width: 100%;
  height: 45px;
}
.nav {
  width: 100%;
  height: 45px;
  position: absolute;
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
  width: 280px;
  height: 28px;
  border: 1px solid #ccc;
  background: #eee;
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
  background: url("../../assets/img/search-icon3.png") no-repeat;
  background-size: 100%;
  margin: 6px 7px;
}
.search-url {
  display: block;
  font-size: 14px;
  color: #333;
  border: none;
  width: 100%;
  height: 100%;
  background: #eee;
  border-radius: 5px;
}
.sa {
  width: 45px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 0;
  right: 5px;
  text-align: center;
  font-size: 15px;
  opacity: 0.7;
}
.wrap {
    height: 93vh;
    background: #fff;
}
.rc-wrap {
  padding: 20px 14px;
  overflow: hidden;
}
.title {
  font-size: 15px;
  color: #999;
}
.rc-wrap ul li {
  float: left;
  width: 31.5%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #333;
  font-size: 13px;
  border-radius: 4px;
  background: #f2f2f2;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 10px 2.75% 0 0;
}
.rc-wrap ul li:nth-of-type(3n){
  margin: 10px 0 0 0
}
.rc-wrap ul li:nth-child(2) {
  color: #f60
}
</style>