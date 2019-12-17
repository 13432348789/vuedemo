<template>
    <div class="mine">
        <div class="banner">
            <div class="nav-box">
                <div class="nav-title">我的易购</div>
                <div class="nav-right">
                    <a class="user-setting" href="#"></a>
                </div>
            </div>
            <div class="user-info">
                <div class="user-logo">
                    <a href="#">
                        <img src="../../assets/img/0000000000_01.jpg" alt="">
                    </a>
                    <a href="#" class="qurenzheng">去实名认证</a>
                </div>
                <div class="user-detail">
                    <div class="user-name">
                        <span v-if="login">请登录</span>
                        <span else>{{ username }}</span>
                    </div>
                    <div class="user-content">
                        <a href="#">
                            <div class="user-level">生态值191</div>
                        </a>
                    </div>
                    <div class="user-qrcode">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <div class="money">
                <div class="money-list">
                    <a class="btn" href="#">
                        <b>0</b>
                        <span>优惠券</span>
                    </a>
                    <a class="btn" href="#">
                        <b>0</b>
                        <span>领云钻</span>
                    </a>
                    <a class="btn" href="#">
                        <b>0</b>
                        <span>足迹</span>
                    </a>
                    <a class="btn" href="#">
                        <b>0</b>
                        <span>我的关注</span>
                    </a>
                </div>
            </div>
            <div class="vip-box">
                <a href="#" class="vip-btn">
                    <div class="vip-img">
                        <img src="../../assets/img/vip.png" alt="">
                    </div>
                    <div class="vip-text">
                        【免费】您可领一张运费券
                    </div>
                    <div class="vip-go">
                        <p>立即领取</p>
                        <i></i>
                    </div>
                </a>
            </div>
        </div>
        <div class="new-module-box">
            <div class="box-title">
                <span>我的订单</span>
                <a href="#">
                    查看全部 
                    <i class="to-all"></i>
                </a>
            </div>
            <div class="order-list">
                <a href="#" class="order-btn">
                    <i class="pay-ico"></i>
                    <span>待支付</span>
                </a>
                <a href="#" class="order-btn">
                    <i class="recieve-ico"></i>
                    <span>待收货</span>
                </a>
                <a href="#" class="order-btn">
                    <i class="comment-ico"></i>
                    <span>评价有礼</span>
                </a>
                <a href="#" class="order-btn">
                    <i class="maintain-ico"></i>
                    <span>退还/售后</span>
                </a>
                <a href="#" class="order-btn">
                    <i class="order-ico"></i>
                    <span>常购清单</span>
                </a>
            </div>
        </div>
        <div class="new-module-box2">
            <div class="box-title">
                <span>必备工具</span>
            </div>
            <div class="server-list">
                <a href="#" class="server-btn" v-for="(server,index) in servers" :key="index">
                    <img :src="server.img" width="100%" alt="">
                    <span>{{ server.text }}</span>
                </a>
            </div>
        </div>
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
    </div>
</template>

<script>
    export default {
        data () {
            return {
                login:true,
                username:"",
                servers:[
                    {
                        img:require("../../assets/img/157250874743127029.png"),
                        text:"红包"
                    },
                    {
                        img:require("../../assets/img/157250876042530564.png"),
                        text:"店铺关注"
                    },
                    {
                        img:require("../../assets/img/157250878626080332.png"),
                        text:"足迹"
                    },
                    {
                        img:require("../../assets/img/157136450994431031.png"),
                        text:"客户服务"
                    },
                    {
                        img:require("../../assets/img/157251063564774447.png"),
                        text:"必抢清单"
                    },
                    {
                        img:require("../../assets/img/157136454213083878.png"),
                        text:"拼购"
                    },
                    {
                        img:require("../../assets/img/157251073785756292.png"),
                        text:"校园VIP"
                    },
                    {
                        img:require("../../assets/img/157136448419617333.png"),
                        text:"我的试用"
                    }
                ],
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
            }
        },
        methods: {
            isUsername () {
                let user = window.localStorage.username
                this.login=false
                this.username =user
                
            }
        },
        created() {
            this.isUsername()
        }
    }
</script>

<style lang="scss" scoped>
.mine {
    width: 100%;
    background: #f2f2f2;
    padding-bottom: 50px;
}
.banner {
    width: 100%;
    height: 240PX;
    background: #ffdb47;
    position: relative;
}
.nav-box {
    height: 25PX;
    padding-top: 10PX;
    text-align: center;
    position: relative;
}
.nav-title {
    color: #000;
    font-size: 20PX;
    font-weight: bold;
}
.nav-right {
    width: 23PX;
    height: 23PX;
    position: absolute;
    right: 16PX;
    top: 13PX
}
.user-setting {
    display: block;
    width: 23PX;
    height: 23PX;
    background: url(../../assets/img/setting.png)no-repeat center;
    background-size: contain
}
.user-info {
    clear: both;
    display: flex;
    padding: 29PX 23PX 0;
    position: relative;
}
.user-logo {
    position: relative;
}
.user-logo img {
    display: block;
    width: 65PX;
    height: 65PX;
    border-radius: 1.3rem;
    border: 0.1rem solid #fff;
}
.qurenzheng {
    width: 78PX;
    height: 16PX;
    line-height: 16PX;
    text-align: center;
    background-color: #FFECA3;
    position: absolute;
    bottom: -2PX;
    left: -3PX;
    z-index: 10;
    border-radius: 0.4rem;
    font-size: 11PX;
    color: #222;
}
.user-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 16PX;
}
.user-name {
    display: flex;
    align-items: center;
    margin-bottom: 10PX;
}
.user-name span {
    display: block;
    font-size: 15PX;
    margin-right: 5PX;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
}
.user-content {
    display: flex;
    align-items: center;
}
.user-level {
    height: 16PX;
    background: #E1BB23;
    color: #fff;
    font-size: 11PX;
    border-radius: .3rem;
    padding: 0 6PX 2PX;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-qrcode {
    position: absolute;
    top: 33PX;
    right: 23PX;
}
.user-qrcode a {
    display: block;
    width: 65PX;
    height: 65PX;
    background: url(../../assets/img/qr-icon.png) no-repeat;
    background-size: contain;
}
.money {
    width: 100%;
    height: 96PX;
    display: flex;
}
.money-list {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}
.btn {
    width: 25%;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.btn b {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 16PX;
    color: #222;
    font-weight: bold;
}
.btn span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 15PX;
    color: #222;
}
.vip-box {
    width: 88%;
    height: 33PX;
    padding: 7PX 13PX 7PX 11PX;
    background: #fff;
    border-radius: .24rem;
    margin-top: -16PX;
    margin-left: 13PX;
}
.vip-btn {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
}
.vip-img {
    display: inline-block;
    width: 49PX;
    height: 33PX;
}
.vip-img img {
    width: 100%;
    vertical-align: middle;
}
.vip-text {
    display: inline-block;
    width: 209PX;
    font-size: 13PX;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.vip-go {
    display: flex;
    float: right;
    align-items: center;
}
.vip-go p {
    font-size: 13PX;
    color: #444;
}
.vip-go i {
    font-size: 0;
    display: block;
    width: 16PX;
    height: 16PX;
    margin-left: 3PX;
    background: url(../../assets/img/r-icon.png);
    background-size: contain;
}
.new-module-box {
    position: relative;
    width: 87.5%;
    border-radius: .24rem;
    background: #fff;
    margin-left: 13PX;
    padding: 13PX;
    margin-top: 35PX;
    margin-bottom: 10PX;
}
.box-title {
    width: 100%;
    height: 18PX;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: PingFangSC-Semibold;
    font-size: 16PX;
    color: #222;
    letter-spacing: 0;
    font-weight: 700;
}
.box-title span {
    display: block;
    font-size: 16PX;
}
.box-title a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13PX;
    color: #666;
}
.to-all {
    display: inline-block;
    width: 13PX;
    height: 13PX;
    background: url(../../assets/img/next.png) no-repeat;
    background-size: contain;
}
.order-list {
    display: flex;
    height: 95PX;
    align-items: center;
    justify-content: space-around;
}
.order-btn {
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.order-btn i {
    display: block;
    width: 33PX;
    height: 33PX;
    margin-bottom: 7PX;
    position: relative;
}
.order-btn span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13PX;
    color: #666;
}
.pay-ico {
    background: url(../../assets/img/order-icon01.png) no-repeat;
    background-size: contain;
}
.recieve-ico {
    background: url(../../assets/img/order-icon02.png) no-repeat;
    background-size: contain;
}
.comment-ico {
    background: url(../../assets/img/order-icon03.png) no-repeat;
    background-size: contain;
}
.maintain-ico {
    background: url(../../assets/img/order-icon04.png) no-repeat;
    background-size: contain;
}
.order-ico {
    background: url(../../assets/img/order-icon05.png) no-repeat;
    background-size: contain;
}
.new-module-box2 {
    position: relative;
    width: 87.5%;
    border-radius: .24rem;
    background: #fff;
    margin-left: 13PX;
    padding: 13PX;
    margin-top: 12PX;
    margin-bottom: 10PX;
    overflow: hidden;
}
.server-btn {
    display: flex;
    width: 25%;
    height: 65PX;
    float: left;
    flex-direction: column;
    align-items: center;
    margin-top: 16PX;
    justify-content: center;
}
.server-btn img {
    display: block;
    width: 26PX;
    height: 26PX;
    margin-bottom: 8PX;
}
.server-btn span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13PX;
    color: #222;
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