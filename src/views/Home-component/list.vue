<template>
  <div class="List">
    <div class="ltitle">
      <img src="../../assets/blue/157484786182145202.png" width="100%">
    </div>
    <div class="item">
      <div class="items">
        <img class="img1" src="../../assets/img/156929156220838915.png" width="100%">
        <img class="img2" src="../../assets/img/68d18fc7c8234a6e82d83a6309717ea1.jpg" width="100%">
        <p class="listname">
          <span class="name">人气榜</span>
        </p>
        <p class="ititle">学习娱乐乐器榜</p>
        <p class="idesc">今日销售爆款</p>
      </div>
      <div class="items">
        <img class="img1" src="../../assets/img/156929175197393382.png" width="100%">
        <img class="img2" src="../../assets/img/2de69a0cf96344f0ad28bb7b2b77ffa3.jpg" width="100%">
        <p class="listname">
          <span class="two-name">趋势榜</span>
        </p>
        <p class="ititle">人气智能电视榜</p>
        <p class="idesc">本周趋势上升107%</p>
      </div>
      <div class="items">
        <img class="img1" src="../../assets/img/156929156220838915.png" width="100%">
        <img class="img2" src="../../assets/img/e825bcce881a4cdcba4715283b9b7d49.jpg" width="100%">
        <p class="listname">
          <span class="name">人气榜</span>
        </p>
        <p class="ititle">休闲补脑坚果榜</p>
        <p class="idesc">本月趋势上升141%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.List {
  width: 100%;
  padding-top: 5px;
  background:rgb(33, 100, 231);
}
.ltitle {
  width: 100%;
  height: 100%;
}
.item {
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: space-evenly
}
.items {
  width: 115px;
  height: 100%;
  position: relative;
  background: #fff;
  border-radius: 5px
}

.img1 {
  width: 115px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.img2 {
  width: 83px;
  height: 83px;
  position: relative;
  margin: 0 auto;
  display: block;
}
.listname {
  width: 100%;
  height: 16px;
  position: absolute;
  top: 86px;
  left: 0;
}
.name {
  width: 40px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #d9a87a;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-size: 11px;
}
.two-name {
  width: 40px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #fb7f0a;
  color: #fb7f0a;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-size: 11px;
}
.ititle {
  width: 120px;
  height: 15px;
  position: relative;
  display: block;
  margin-top: 20px;
  margin-left: -2px;
  text-align: center;
  color: white;
  font-size: 14px;
}
.idesc {
  width: 120px;
  height: 15px;
  position: relative;
  display: block;
  margin-left: -2px;
  margin-top: 5px;
  text-align: center;
  color: white;
  font-size: 12px;
  opacity: 0.8;
}
</style>