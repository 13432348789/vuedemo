<template>
    <div class="register">
        <div class="nav">
            <div class="nav-back">
                <a href="javascript:void(history.go(-1));">
                <img src="../../assets/img/back.png" width="100%" />
                </a>
            </div>
            <div class="nav-zc">
                用户注册
            </div>
            <a class="sa" href="#">联系客服</a>
        </div>
        <form>
            <div class="container">
                <div class="ipt-box">
                    <label class="clabel" for="phoneNum">手机号</label>
                    <input 
                     type="tel" 
                     id="phoneNum"
                     name="phone"
                     placeholder="请输入手机号" 
                     class="cinfo" 
                     maxlength="11"
                     v-model="phone"
                     @keyup="shouji"
                     @keydown="onblur"
                     />
                     <i  v-show="clears" @click="clear">
                         <img class="clear"  src="../../assets/img/icon_close.png" alt="">
                     </i>
                     <span class="tips" v-if="tips1">请输入正确的手机号码</span>
                </div>
                <div class="tel-register">
                    <div class="ipt-box clearfix">
                        <label for="smsCode" class="clabel tel-code">短信验证码</label>
                        <input @input="changeNum" type="number" id="smsCode"  v-model.number="yzm" class="cinfo tel-ipt" maxlength="6">
                    </div>
                    <!-- <button class="getCode"name="yzm"  :class="{disabled:!this.canClick}" @click="countDown">{{ content }}</button> -->
                    <div class="close_tel" v-show="show" @click="countDown">获取验证码</div>
                    <div class="close_tel2" v-show="!show" > 重新获取({{count}}s) </div>
                </div>
                <div class="ipt-box">
                    <label for="tel-pass" class="clabel tel-label">设置密码</label>
                    <input 
                     :type="pswtype"
                     id="tel-pass"  
                     name="password"
                     class="cinfo codeDel" 
                     maxlength="16"
                     placeholder="4-16位数字+字母组合"
                     v-model="mima"
                    @blur="pamima"
                     />
                     <i>
                        <img class="eye" @click="type" :src="eye" alt="">
                     </i>
                     <span class="tips" v-if="tips2">请输入正确密码</span>
                </div>
                <div class="protocal">
                    <input type="checkbox">
                    <div class="protocal-info">
                         同意<span>《</span><a href="#">会员章程</a><span>》</span>
                        <span>《</span><a href="#">易付宝协议</a><span>》</span>
                        <span>《</span><a href="#">苏宁隐私政策</a><span>》</span>
                        <span>《</span><a href="#">易付宝隐私政策</a><span>》</span>
                    </div>
                </div>
                <a href="javascript:void(0)" @click="submit" class="submit-btn">注册</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return{
                    content:"获取验证码",
                 totalTime: 60,
                 canClick: true,
                 phone: "",
                 mima: "",
                 yzm: [],
                 tips1: false,
                 tips2: false,
                 tips3: false,
                 clears: false,
                 pswtype: "password",
                 eye:require("../../assets/img/eye_open.png"),
                 yzms:0,
                 show:true,
                 count:"",
            }
        },
        methods: {
            shouji() {
                // window.console.log(123);
                if (
                    /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(this.phone)
                ) {
                    this.tips1 = false;
                } else {
                    this.tips1 = true;
                }
            },
           pamima() {
                if (/^[a-zA-Z0-9_-]{4,16}$/.test(this.mima)) {
                    this.tips2 = false;
                } else {
                    this.tips2 = true;
                }
            }, 
           submit () {
                if (window.localStorage.useArr) {
                var array = JSON.parse(window.localStorage.useArr);
                } else {
                    array = [];
                }
                if (/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(
                    this.phone) &&/^[a-zA-Z0-9_-]{4,16}$/.test(this.mima) &&
                    this.yzm === this.yzms
                ) {
                    var obj = {
                    use: this.phone,
                    paw: this.mima
                    };
                    array.push(obj);
                    window.localStorage.useArr = JSON.stringify(array);
                    this.$toast("注册成功");
                    this.$router.push({ path: "/My" });
                } else {
                }
                console.log(typeof(this.yzm))
                
                
            },
            clear() {
                this.phone = "",
                this.clears = false
            },
            onblur() {
                if (this.phone == ""){
                    this.clears = false;
                } else {
                    this.clears = true
                }
            },
            type() {
                this.pswtype = this.pswtype === "password" ? "text" : "password";
                this.eye =
                this.eye == require("../../assets/img/eye_open.png")
                ? require("../../assets/img/eye_close.png")
                : require("../../assets/img/eye_open.png");
            },
            countDown() {
            this.yzms = Math.floor(Math.random() * 999999 + 111111);    
            this.$notify({
                message:this.yzms,
                duration: 5000
            })
            console.log(this.yzms)
            // if (!this.canClick) return;
            // this.canClick = false;
            // this.content = this.totalTime + "s";
            // let clock = window.setInterval(() => {
            //     this.totalTime--;
            //     this.content = this.totalTime + "s";
            //     if (this.totalTime < 0) {
            //     window.clearInterval(clock);
            //     this.content = "重新发送";
            //     this.canClick = true;
            //     }
            // }, 1000);
            const TIME_COUNT = 30
            if (!this.timer) {
                this.count = TIME_COUNT
                this.show = false
                this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--
                } else {
                    this.show = true
                    clearInterval(this.timer)
                    this.timer = null
                }
                }, 1000)
            }
            },
            changeNum (e) {
            if(this.yzm.length>6){
                this.yzm=this.yzm.slice(0,6)
            }
            },
        },
    }
</script>

<style lang="scss" scoped>
.register {
    padding: 0 16PX;
    background: #fff;
    height: 100vh;
}
.nav {
  width: 100%;
  height: 45PX;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-back {
  width: 25PX;
  height: 25PX;
  display: block;
  font-size: 0;
  line-height: 0;
  padding: 10PX 10PX 10PX 0;
}
.nav-back a {
  display: block;
}
.nav-zc {
    font-size: 19PX;
    color: #222;
    letter-spacing: 0;
    text-align: center;
}
.sa {
    font-size: 13PX;
    color: #222;
}
.container {
    margin-top: 40PX;
}
.ipt-box {
    position: relative;
    width: 100%;
    height: 45PX;
    line-height: 45PX;
    box-sizing: border-box;
    border-bottom: 1PX solid #DDD;
    margin-bottom: 25PX;
}
.ipt-box .clabel {
    float: left;
    width: 80PX;
    line-height: 48PX;
    font-size:16PX;
    color: #666;
}
.ipt-box .cinfo {
    float: left;
    width: 220PX;
    height: 22PX;
    padding-left: 22PX;
    border: 0;
    margin-top: 13PX;
    box-sizing: border-box;
    outline: 0;
    font-size: 16PX;
    color: #222;
    caret-color: #fa0;
    letter-spacing: 2PX;
}
.clearfix {
    float: left;
    width: 68%;
}
.tel-ipt {
    width: 120PX!important;
    padding-left: 16PX!important;
}
.tel-register {
    width: 100%;
    overflow: hidden;
}
.tel-register a {
    float: right;
}
.container .tel-register .getCode {
    width: 105PX;
    height: 40PX;
    line-height: 40PX;
    text-align: center;
    border: 1px solid #f50;
    background: #fff;
    border-radius: .78rem;
    font-size: 16PX;
    color: #f50;
    margin-top: 5PX;
    float: right;
}
.close_tel {
  width: 105PX;
  height: 40PX;
  line-height: 40PX;
  text-align: center;
  border: 1px solid #f50;
  background: #fff;
  border-radius: .78rem;
  font-size: 16PX;
  color: #f50;
  outline: none;
  font-weight: 400;
  float: right;
}
.close_tel2 {
  width: 105PX;
  height: 40PX;
  line-height: 40PX;
  text-align: center;
  border-radius: .78rem;
  font-size: 16PX;
  outline: none;
  font-weight: 400;
  float: right;
  background-color: #ddd!important;
  border:1PX solid #ddd!important;
  color: #999!important;
}
.tel-label {
    width: 80PX;
}
.protocal {
    display: flex;
    margin: 40PX 0 30PX;
}
.protocal-info {
    margin-left: 3PX;
    margin-top: -3PX;
    font-size: 13PX;
    color: #999;
}
.protocal-info span {
    color: #101010;
}
.protocal-info a {
    font-size: 13PX;
    color: #101010;
    text-decoration: underline;
}
.submit-btn {
    display: block;
    width: 100%;
    height: 50PX;
    line-height: 50PX;
    margin-top: 20PX;
    text-align: center;
    font-size: 20PX;
    color: #fff;
    background-image: linear-gradient(270deg,#f50 0,#ff8f00 100%);
    border-radius: .9rem;
}
.tips {
    display: inline-block;
    width: 120PX;
    height: 13PX;
    line-height: 13PX;
    color: red;
    padding-left: 22PX;
}
.ipt-box i {
    float: right;
    line-height: 58PX
}
.clear {
    width: 20PX;
    height: 20PX;
}
.eye {
    width: 22PX;
    height: 17PX;
}
.disabled {
  background-color: #ddd!important;
  border-color: #ddd!important;
  color: #999!important;
  cursor: not-allowed!important; // 鼠标变化
}
</style>