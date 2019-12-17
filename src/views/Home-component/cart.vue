<template>
  <div class="bigcart">
    <div class="carto">
      <div class="lcart">
        <div class="title">
          限时抢购
          <span>{{countDownList}}</span>
        </div>
        <div class="titletext">潮流好物限时抢</div>
        <ul>
          <li class="item1">
            <a href="#">
              <img width="100%" src="../../assets/img/100374537160207854picH_1.jpg" alt />
            </a>
            <p class="price">
              <span>￥</span>
              <span>5.5</span>
            </p>
          </li>
          <li class="item2">
            <a href="#">
              <img width="100%" src="../../assets/img/100374537176712613picH_1.jpg" alt />
            </a>
            <p class="price">
              <span>￥</span>
              <span>11</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="intervals"></div>
      <div class="rcart">
        <div class="title">大聚惠</div>
        <div class="titletext">好货一元秒</div>
        <ul>
          <li class="item1">
            <a href="#">
              <img width="100%" src="../../assets/img/157329936006553326.jpg" />
            </a>
            <p class="itemtext">任天堂</p>
          </li>
          <li class="item2">
            <a href="#">
              <img width="100%" src="../../assets/img/157329938043222757.jpg" />
            </a>
            <p class="itemtext">洁柔</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="intervalh"></div>
    <div class="carts">
      <div class="lcarts">
        <div class="title">XX国际</div>
        <div class="titletext">精选全球好物</div>
        <ul>
          <li class="item1">
            <a href="#">
              <img width="100%" src="../../assets/img/0070087641000000011255392280.jpg" />
            </a>
            <p class="itemtext">假一赔十</p>
          </li>
          <li class="item2">
            <a href="#">
              <img width="100%" src="../../assets/img/0070670620000000011095186724.jpg" />
            </a>
            <p class="itemtext">每日抽奖</p>
          </li>
        </ul>
      </div>
      <div class="intervals"></div>
      <div class="rcarts">
        <div class="title">XX拼购</div>
        <div class="titletext">2人拼更实惠 全场包邮</div>
        <ul>
          <li class="item1">
            <a href="#">
              <img width="100%" src="../../assets/img/NMryK4LWKbS0B7G1YLNq_w.png" />
            </a>
            <p class="itemtext">2人拼72</p>
          </li>
          <li class="item2">
            <a href="#">
              <img width="100%" src="../../assets/img/FqGtR8glkAQjWEBITZWRjw.jpg" />
            </a>
            <p class="itemtext">2人拼6.9</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="intervalh"></div>
    <div class="cartss">
      <div class="content">
        <div class="leftctn">
          <p class="line1">为您推荐</p>
          <p class="line2">精选频道</p>
        </div>
        <div class="rightctn">
          <div class="ritem">
            <a href="#">
              <a href="#">
                <img width="90%" src="../../assets/img/0070188725000000000186437199.jpg" />
              </a>
              <p class="rtext">生活家电</p>
            </a>
          </div>
          <div class="ritem">
            <a href="#">
              <a href="#">
                <img width="90%" src="../../assets/img/0010133102000000011122998246.jpg" />
              </a>
              <p class="rtext">Outlets</p>
            </a>
          </div>
          <div class="ritem">
            <a href="#">
              <a href="#">
                <img width="90%" src="../../assets/img/157328928735503053.png" />
              </a>
              <p class="rtext">新品首发</p>
            </a>
          </div>
          <div class="ritem">
            <a href="#">
              <a href="#">
                <img width="90%" src="../../assets/img/157321248524425576.jpg" />
              </a>
              <p class="rtext">0元试用</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="intervalh"></div>
    <div class="cartsss">
      <div class="contents">
        <img class="logo" src="../../assets/img/157164888626937126.png" />
        <div class="marquee_box">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="(item, index) in marqueeList" :key="index">{{item}}</li>
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
      countDownList: "00:00:00",
      actEndTime: "2019-12-6 17:30:00",
      animate: false,
      marqueeList: [
        "干仓不干，湿仓不湿，才是好仓",
        "炖肉、烧汤一级棒，冬日竹笋别错过",
        "坚果Pro 3换了灵魂，胜算能有几成？",
        "饺子还是这样做好吃，个个晶莹剔透高颜值",
        "想要甩掉大肚腩？这5道菜来帮你！"
      ]
    };
  },
  created () {
    setInterval(this.showMarquee, 3000);
    this.countDown();
  },
  methods: {
    showMarquee () {
      this.animate = true;

      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 2000);
    },
    timeFormat(param) {
　　　　　　return param < 10 ? '0' + param : param;
　　},
　　countDown(it) {
　　　　　　var interval = setInterval(() => {
　　　　　　let newTime = new Date().getTime();
　　　　　　let endTime = new Date(this.actEndTime).getTime();
　　　　　　let obj = null;
　　　　　　if (endTime - newTime > 0) {
　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　obj = {
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　};
　　　　　　} else { 
　　　　　　　　obj = {
　　　　　　　　　　day: '00',
　　　　　　　　　　hou: '00',
　　　　　　　　　　min: '00',
　　　　　　　　　　sec: '00'
　　　　　　　　};
　　　　　　clearInterval(interval);
　　　　　  }
　　　　　　　　this.countDownList = obj.hou + ':' + obj.min + ':' + obj.sec ;
　　　　　　}, 1000);
　　  }
　　}
  }
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
.bigcart {
  width: 100%;
  background: rgb(33, 100, 231);
}
.carto,
.carts {
  width: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
}
.lcart {
  width: 47%;
  height: 100%;
  background: #fff;
  border-radius: 20px 0 0 0;
}
.rcart {
  width: 47%;
  height: 100%;
  background: #fff;
  border-radius: 0 20px 0 0;
}
.lcart .title,
.rcart .title,
.lcarts .title,
.rcarts .title {
  font-weight: 700;
  font-size: 17px;
  margin: 10px 0 0 10px;
}
.lcart .title span {
  font-size: 12px
}
.lcart .titletext,
.rcart .titletext,
.lcarts .titletext,
.rcarts .titletext {
  font-size: 13px;
  color: #999;
  margin: 0px 0 0 10px;
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.item1 {
  width: 66px;
  height: 82px;
  position: relative;
}
.item2 {
  width: 66px;
  height: 82px;
  position: relative;
}
.price {
  text-align: center;
  color: #f50;
  font-size: 12px;
}
.itemtext {
  width: 70px;
  height: 29px;
  line-height: 39px;
  font-size: 12px;
  background-image: url("../../assets/img/qipao.png");
  background-size: 100% 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -3px;
}
.lcarts,
.rcarts {
  width: 47%;
  height: 100%;
  background: #fff;
}
.cartss {
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
}
.content {
  width: 94%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
}
.leftctn {
  width: 100px;
  height: 95px;
  padding: 55px 15px 0 10px;
}
.line1 {
  font-size: 18px;
  font-weight: 700;
}
.line2 {
  font-size: 13px;
  color: #999;
}
.rightctn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.ritem {
  width: 60px;
  margin-right: 3px;
}
.rtext {
  text-align: center;
  font-size: 12px;
  color: #000;
}
.cartsss {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
}
.contents {
  width: 94%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 20px;
  position: relative;
}
.logo {
  width: 40px;
  height: 18px;
  padding-left: 10px;
}
i {
  background: #fc0;
  border-radius: 7px;
  font-style: normal;
  padding: 2px 5px 2px 5px;
  margin-right: 5px;
  font-size: 10px;
}
.textswiper {
  font-size: 13px;
}
.marquee_box {
  display: block;
  position: relative;
  width: 290px;
  height: 30px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.marquee_top {
  transition: all 1s;
  margin-top: -30px;
}

.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 15px;
}
</style>