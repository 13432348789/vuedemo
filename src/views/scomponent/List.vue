<template>
  <div class="List">
    <div class="nav">
      <div class="nav-back">
        <a href="javascript:void(history.go(-1));">
          <img src="../../assets/img/back.png" width="100%" />
        </a>
      </div>
      <div class="nav-inp">
        <a class="search-icon" href="#"></a>
        <input class="search-url" href="#" placeholder="空调" />
      </div>
      <a class="sa" href="#"><span></span></a>
    </div>
    <div class="result-ad">
        <a href="#">
            <img src="../../assets/img/157432916424182302.jpg" width="100%">
        </a>
    </div>
    <div class="result-wrap">
        <ul class="result-sort">
            <li class="wbox" v-for="(sort,index) in sorts" :key="index">{{ sort.text }}</li>
        </ul>
        <ul class="result-screen">
            <li class="size" v-for="(screen,index) in screens" :key="index">{{ screen.text}}</li>
        </ul>
        
    </div>
    <div class="brand-rmd">
            <ul class="brand-info">
                <li v-for="(brand,index) in brands" :key="index">
                    <div class="cnt">
                        <img :src="brand.img" width="100%">
                    </div>
                    <p class="re-name">{{ brand.text }}</p>
                </li>
            </ul>
    </div>
    <div class="result-pro">
        <ul class="productList">
            <li v-for="(pro,index) in pros" :key="index">
                <a href="#">
                    <div class="img">
                        <img :src="pro.img" width="100%">
                    </div>
                    <div class="txt">
                        <p class="name">
                            <i class="project-label">{{ pro.zy }}</i>
                            {{ pro.txt }}
                        </p>
                        <p class="info-label">
                            <em class="i-txt">{{ pro.em1 }}</em>
                            <em class="i-txt">{{ pro.em2 }}</em>
                            <em class="i-txt">{{ pro.em3 }}</em>
                        </p>
                        <p class="core-param-label">
                            <span>
                                <strong>{{ pro.strong1 }}</strong>
                                <em>{{ pro.ems1 }}</em>
                            </span>
                            <span>
                                <strong>{{ pro.strong2 }}</strong>
                                <em>{{ pro.ems2 }}</em>
                            </span>
                            <span>
                                <strong>{{ pro.strong3 }}</strong>
                                <em>{{ pro.ems3 }}</em>
                            </span>
                        </p>
                        <div class="price">
                            <p class="price-box">
                                {{ pro.price }}
                                <strong>{{ pro.pricezs }}</strong>
                                {{ pro.pricexs }}
                            </p>
                            <p class="product-label">
                                <i>{{ pro.zp }}</i>
                            </p>
                            <p class="shop-num">
                                <em>{{ pro.pl }}</em>
                                <em>{{ pro.hp }}</em>
                            </p>
                            <p class="shop-name">
                                <em>{{ pro.shopname }}</em>
                                <i>{{ pro.jd }}</i>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            sorts:[
                {text:"综合"},
                {text:"销量"},
                {text:"价格"},
                {text:"筛选"}
            ],
            screens:[
                {text:"商城服务"},
                {text:"品牌▼"},
                {text:"商品匹数▼"},
                {text:"国家效能等级"}
            ],
            brands: [
                {img:require("../../assets/img/1574417624436_app_wap_isearch.png"),
                 text:"1级效能"
                },
                {img:require("../../assets/img/1574417695010_app_wap_isearch.png"),
                 text:"变频"
                },
                {img:require("../../assets/img/1574417735121_app_wap_isearch.png"),
                 text:"1.5匹"
                 },
                {img:require("../../assets/img/1574417779923_app_wap_isearch.png"),
                 text:"静音舒适"
                 },
                {img:require("../../assets/img/1574417895371_app_wap_isearch.png"),
                 text:"柜机空调"
                 }
            ],
            pros:[
                {
                    img:require("../../assets/img/1tUEg5MwzJeGR560XQuu_A.jpg"),
                    zy:"自营",
                    txt:"格力（GREE）1.5匹 定频 KFR-35GW NhDcD3 宁炫 冷暖家用空调挂机",
                    em1:" 百档风速",
                    em2:"| 智能操控",
                    em3:"| 多维洁净科技",
                    strong1:"1.5匹(15-25㎡)",
                    strong2:"定频",
                    strong3:"3级",
                    ems1:"商品匹数",
                    ems2:"变频/定频",
                    ems3:"能效等级",
                    price:"￥",
                    pricezs:"2849",
                    pricexs:".00",
                    zp:"赠品",
                    pl:"16万+条评价",
                    hp:"好评率99%",
                    shopname:"格力空调自营旗舰店",
                    jd:"进店>"
                },
                {
                    img:require("../../assets/img/1tUEg5MwzJeGR560XQuu_A.jpg"),
                    zy:"自营",
                    txt:"格力（GREE）1.5匹 定频 KFR-35GW NhDcD3 宁炫 冷暖家用空调挂机",
                    em1:" 百档风速",
                    em2:"| 智能操控",
                    em3:"| 多维洁净科技",
                    strong1:"1.5匹(15-25㎡)",
                    strong2:"定频",
                    strong3:"3级",
                    ems1:"商品匹数",
                    ems2:"变频/定频",
                    ems3:"能效等级",
                    price:"￥",
                    pricezs:"2849",
                    pricexs:".00",
                    zp:"赠品",
                    pl:"16万+条评价",
                    hp:"好评率99%",
                    shopname:"格力空调自营旗舰店",
                    jd:"进店>"
                },
                {
                    img:require("../../assets/img/1tUEg5MwzJeGR560XQuu_A.jpg"),
                    zy:"自营",
                    txt:"格力（GREE）1.5匹 定频 KFR-35GW NhDcD3 宁炫 冷暖家用空调挂机",
                    em1:" 百档风速",
                    em2:"| 智能操控",
                    em3:"| 多维洁净科技",
                    strong1:"1.5匹(15-25㎡)",
                    strong2:"定频",
                    strong3:"3级",
                    ems1:"商品匹数",
                    ems2:"变频/定频",
                    ems3:"能效等级",
                    price:"￥",
                    pricezs:"2849",
                    pricexs:".00",
                    zp:"赠品",
                    pl:"16万+条评价",
                    hp:"好评率99%",
                    shopname:"格力空调自营旗舰店",
                    jd:"进店>"
                },
                {
                    img:require("../../assets/img/1tUEg5MwzJeGR560XQuu_A.jpg"),
                    zy:"自营",
                    txt:"格力（GREE）1.5匹 定频 KFR-35GW NhDcD3 宁炫 冷暖家用空调挂机",
                    em1:" 百档风速",
                    em2:"| 智能操控",
                    em3:"| 多维洁净科技",
                    strong1:"1.5匹(15-25㎡)",
                    strong2:"定频",
                    strong3:"3级",
                    ems1:"商品匹数",
                    ems2:"变频/定频",
                    ems3:"能效等级",
                    price:"￥",
                    pricezs:"2849",
                    pricexs:".00",
                    zp:"赠品",
                    pl:"16万+条评价",
                    hp:"好评率99%",
                    shopname:"格力空调自营旗舰店",
                    jd:"进店>"
                },
                {
                    img:require("../../assets/img/1tUEg5MwzJeGR560XQuu_A.jpg"),
                    zy:"自营",
                    txt:"格力（GREE）1.5匹 定频 KFR-35GW NhDcD3 宁炫 冷暖家用空调挂机",
                    em1:" 百档风速",
                    em2:"| 智能操控",
                    em3:"| 多维洁净科技",
                    strong1:"1.5匹(15-25㎡)",
                    strong2:"定频",
                    strong3:"3级",
                    ems1:"商品匹数",
                    ems2:"变频/定频",
                    ems3:"能效等级",
                    price:"￥",
                    pricezs:"2849",
                    pricexs:".00",
                    zp:"赠品",
                    pl:"16万+条评价",
                    hp:"好评率99%",
                    shopname:"格力空调自营旗舰店",
                    jd:"进店>"
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
body {
    padding-bottom: 0!important;
}
.List {
    position: relative;
}
.nav {
  width: 100%;
  height: 45px;
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
  width: 285px;
  height: 30px;
  background: #eee;
  position: absolute;
  display: flex;
  align-items: center;
  top: 7px;
  left: 45px;
  border-radius: 5px;
  color: #333
}
.search-icon {
  display: block;
  width: 15px;
  height: 15px;
  background: url("../../assets/img/search-icon3.png") no-repeat;
  background-size: 100%;
  margin: 7px 7px 4px 7px;
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
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 35px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 15px;
  opacity: 0.7;
  padding: 10PX 11PX 10PX 10PX  ;

}
.sa span {
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url(../../assets/img/search-icon9.png)no-repeat;
    background-size: 100%
}
.result-wrap {
    position: relative;
}
.result-sort {
    width: 100%;
    height: 45PX;
    display: flex;
    overflow: hidden;
    position: static;
}
.wbox {
    position: relative;
    height: 45PX;
    line-height: 45PX;
    text-align: center;
    font-size: 16PX;
    color: #333;
    flex: 1
}
.wbox:nth-child(1) {
    color: #f60
}
.result-screen {
    width: 100%;
    height: 30PX;
    display: flex;
    justify-content: space-evenly;
    padding: 8PX 0;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #f2f2f2;
}
.size {
    position: relative;
    width: 80PX;
    height: 30PX;
    background: #f5f5f5;
    font-size: 14PX;
    line-height: 30PX;
    color: #333;
    text-align: center;
    border-radius: 2px;
    padding: 0 5PX;
    margin-right: 10PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.size:last-child {
    margin-right: 0;
}
.brand-rmd {
    height: 120PX;
    overflow: hidden;
    background-color: #f2f2f2;
}
.brand-info {
    overflow: hidden;
    color: #333;
    display: flex;
    justify-content: space-evenly;
}
.brand-info li {
    margin-top: 10PX;
    background-color: #fff;
    border-radius: 4PX;
    border: 1PX solid transparent;
}
.brand-info li:last-child {
    margin-right: 0;
}
.cnt {
    width: 65PX;
    height: 65PX;
    margin: 0 auto !important;
    line-height: 55PX;
    padding: 4PX
}
.re-name {
    width: 65PX;
    height: 25PX;
    line-height: 25PX;
    font-size: 13PX;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    padding: 0 5PX
}
.result-pro {
    margin: 0 auto;
    overflow: hidden;
}
.productList {
    overflow: hidden;
    background-color: #fff;
}
.productList li {
    float: left;
    padding: 10PX;
    width: 394PX;
    background: #FFF;
    overflow: hidden;
    margin-bottom: 1PX;
    position: relative;
}
.result-pro ul li .img {
    position: relative;
    float: left;
    width: 110PX;
    height: 110PX;
    margin: 0 10PX 0 0;
}
.result-pro ul li .txt {
    position: relative;
    overflow: hidden;
    border-bottom: 1PX solid #ddd;
}
.result-pro ul li .txt .name {
    height: 23PX;
    line-height: 20PX;
    font-size: 16PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.result-pro ul li .txt .name .project-label {
    display: inline-block;
    margin: 1PX 3PX 0 0;
    padding:0 1PX;
    font-size: 15PX;
    border: 1px solid #f60;
    color: #f60;
    position: relative;
    border-radius: 2PX;
    font-style: normal
}
.result-pro ul li .info-label {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 15PX;
    font-size: 13PX;
    line-height: 15PX;
    margin: 5PX 0 10PX;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.result-pro ul li .info-label .i-txt {
    float: left;
    height: 15PX;
    padding: 0 1PX 0 3PX;
    color: #999;
    font-style: normal
}
.core-param-label {
    height: 30PX;
    overflow: hidden;
    margin: 0 0 3PX;
}
.core-param-label span {
    float: left;
    height: 30PX;
    border-radius: 5PX;
    background: #F9F9F9;
    margin-right: 5PX;
    padding: 3PX 8PX;
    text-align: center;
}
.core-param-label span strong {
    display: block;
    font-size:13PX;
    height:13PX;
    line-height: 13PX;
    margin-bottom: 2PX;
    overflow: hidden;
}
.core-param-label span em {
    display: block;
    height: 11PX;
    font-size: 11PX;
    line-height: 11PX;
    color: #999;
    overflow: hidden;
    font-style: normal
}
.result-pro ul li .txt .price {
    position: relative;
    padding-bottom: 10PX;
    overflow: hidden;
}
.result-pro ul li .txt .price .price-box {
    height: 23PX;
    overflow: hidden;
    font-size: 14PX;
    line-height: 23PX;
    color: #F60;
    overflow: hidden;
    display: block;
}
.result-pro ul li .txt .price .price-box strong {
    font-size: 18PX;
    font-weight: normal;
    margin-left: -5PX;
    margin-right: -3PX;
}
.result-pro ul li .txt .product-label {
    height: 17PX;
    margin: 2PX 0 0 0;
    overflow: hidden;
}
.result-pro ul li .txt .product-label i {
    float: left;
    display: inline-block;
    margin: 0 2PX 0 0;
    padding: 2PX 2PX;
    height: 13PX;
    line-height: 13PX;
    color: #FFF;
    font-size: 12PX;
    overflow: hidden;
    border-radius: 2PX;
    background: #f60!important;
    font-style: normal;
}
.result-pro ul li .txt .price .shop-num {
    display: block;
    height: 20PX;
    line-height: 20PX;
    margin: 8PX 0 0 0;
    overflow: hidden;
}
.result-pro ul li .txt .price .shop-num em {
    color: #999;
    margin: 0 13PX 0 0;
    font-style: normal;
    font-size: 16PX
}
.result-pro ul li .txt .shop-name {
    color: #999;
    height: 15PX;
    line-height: 15PX;
    margin-top: 5PX;
    overflow: hidden;
}
.result-pro ul li .txt .shop-name em {
    float: left;
    width: 150PX;
    height: 15PX;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-style: normal;
    font-size: 16PX
}
.result-pro ul li .txt .shop-name i {
    position: relative;
    display: inline-block;
    height: 15PX;
    line-height: 16PX;
    font-size: 15PX;
    margin: 0 0 0 40PX;
    font-style: normal;
}
</style>