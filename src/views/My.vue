<template>
  <div class="mine">
    <header>
      <div class="navurl">
        <a class="kf" href="#">联系客服</a>
        <div class="jg"></div>
        <a class="qyzc" href="#">企业注册</a>
      </div>
    </header>
    <div class="login-content">
      <h2>欢迎登录忽悠商城</h2>
      <div class="tel_inp">
        <!-- <label class="input-label" >请输入手机号</label> -->
        <input
          type="tel"
          name="phone"
          v-model="phone"
          @keyup="onblur"
          maxlength="11"
          class="txt-inp"
          placeholder="请输入手机号"
        />
        <i v-show="clears" @click="clear">
          <img class="clear" width="100%" src="../assets/img/icon_close.png" alt />
        </i>
      </div>
      <div class="tel_inp pswbox">
        <input :type="pswtype" name="psw" maxlength="16" class="txt-inp mima" placeholder="请输入密码" />
        <i>
          <img class="eye" @click="type" :src="eye" alt />
        </i>
        <!-- <div class="yzm">
          <label class="label"></label>
          <label class="label"></label>
          <label class="label"></label>
          <label class="label"></label>
        </div>
        <button class="hqyzm" :class="{disabled: !this.canClick}" @click="countDown">{{ content }}</button>-->
      </div>
      <div class="btnbox">
        <a @click="mine" class="loginbtn" href="#">登录</a>
        <router-link to="/My/register">
          <a href="#" class="zhmm">如没有账号? 立即去注册</a>
        </router-link>
      </div>
    </div>
    <footer>
      <p class="loginp">其他登录方式</p>
      <div class="f-icon">
        <a href="#">
          <img src="../assets/img/icon_qq.png" width="100%" />
        </a>
        <a href="#">
          <img src="../assets/img/icon_epp.png" width="100%" />
        </a>
        <a href="#">
          <img src="../assets/img/icon_k.png" width="100%" />
        </a>
      </div>
      <p class="agree">
        <span>
          我同意
          <b>《</b>
          <a href="#">忽悠商城会员章程</a>
          <b>》</b>
          <b>《</b>
          <a href="#">易协议</a>
          <b>》</b>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      content: "获取验证码",
      totalTime: 60,
      canClick: true,
      clears: false,
      phone: "",
      pswtype: "password",
      eye: require("../assets/img/eye_open.png")
    };
  },
  methods: {
    clear() {
      (this.phone = ""), (this.clears = false);
    },
    onblur() {
      if (this.phone == "") {
        this.clears = false;
      } else {
        this.clears = true;
      }
    },
    type() {
      this.pswtype = this.pswtype === "password" ? "text" : "password";
      this.eye =
        this.eye == require("../assets/img/eye_open.png")
          ? require("../assets/img/eye_close.png")
          : require("../assets/img/eye_open.png");
    },
    mine() {
      if (window.localStorage.useArr) {
        var array = JSON.parse(window.localStorage.useArr);
      } else {
        array = [];
      }

      if (window.localStorage.islogin) {
        var arr = [];
      } else {
        arr = [];
      }

      //拿input
      //  let inputi = document.querySelectorAll(".lgn_input  input");

      let phone = document.getElementsByName("phone")[0];
      let psw = document.getElementsByName("psw")[0];
      let iflogin = false;
      let index = 0;

      for (var i = 0; i < array.length; i++) {
        if (phone.value === array[i].use) {
          iflogin = true;
          index = i;
        }
      }

      //给两个input 做判断
      if (phone.value == "") {
        this.$notify({
          message: "请输入手机号",
          duration: 2000
        });
      } else if (psw.value == "") {
        this.$notify({
          message: "请输入密码",
          duration: 2000
        });
      } else {
        if (iflogin) {
          // console.log(array[index]);

          if (psw.value === array[index].psw) {
            let obj = array[index];
            arr.push(obj);
            window.localStorage.islogin = JSON.stringify(arr);
            // console.log(array[index]);
            this.$notify({
              message: "登录成功",
              duration: 2000
            });
            this.$router.replace({ path: "/home/mine" });
            //  console.log(phone.value)
            localStorage.setItem("username", phone.value);
          } else {
            this.$notify({
              message: "密码错误",
              duration: 2000
            });
          }
        } else {
          this.$notify({
            message: "此用户未注册",
            duration: 2000
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #333;
}
.mine {
  height: 100vh;
  position: relative;
  background: #fff;
}
header {
  box-sizing: border-box;
  padding: 5px 10px 0;
  clear: both;
  overflow: hidden;
}
.navurl {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  float: right;
}
.navurl .kf {
  margin-right: 10px;
}
.jg {
  display: inline-block;
  width: 1px;
  height: 13px;
  margin-top: 5px;
  background: #ccc;
}
.navurl .qyzc {
  margin-left: 10px;
}
.navurl a {
  font-size: 14px;
  color: #222;
  text-align: center;
}
.login-content {
  padding: 0 37.5px;
  margin-top: 30px;
}
h2 {
  font-weight: 500;
  font-size: 17px;
}
.tel_inp {
  width: 300px;
  height: 45px;
  line-height: 45px;
  margin-top: 30px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
// .input-label {
//   height: 35px;
//   color: #ccc;
//   font-size: 16px;
//   position: absolute;
//   left: 0px;
//   top: 5px;
//   cursor: text;
// }
.txt-inp {
  width: 100%;
  border: none;
  font-size: 17px;
}
.yzmbox {
  width: 300px;
  height: 45px;
  margin-top: 25px;
  overflow: hidden;
}
.yzm {
  width: 200px;
  height: 45px;
  display: inline-block;
  overflow: hidden;
}
.label {
  width: 40px;
  height: 44px;
  margin-right: 10px;
  float: left;
  border-bottom: 1px solid#ccc;
  line-height: 45px;
  text-align: center;
}
.hqyzm {
  display: inline-block;
  float: right;
  width: 98px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 13px;
  color: #333;
}
.disabled {
  background-color: #ddd;
  border-color: #ddd;
  color: #999;
  cursor: not-allowed; // 鼠标变化
}
.btnbox {
  margin-top: 50px;
  text-align: center;
}
.loginbtn {
  width: 300px;
  height: 45px;
  line-height: 45px;
  display: block;
  background: #fc0;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
}
.zhmm {
  display: block;
  font-size: 14px;
  margin-top: 20px;
}
footer {
  position: absolute;
  left: 65px;
  bottom: 20px;
  width: 250px;
  text-align: center;
  font-size: 10px;
}
.loginp {
  margin-bottom: 10px;
}
.f-icon {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
.f-icon a {
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 72px;
}
.f-icon a:last-child {
  margin: 0;
}
.agree span {
  color: #999;
}
.agree b {
  color: #333;
}
.agree a {
  text-decoration: underline;
}
.mima {
  letter-spacing: 2px;
}
.tel_inp i {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 7px;
  right: 0;
}
.eye {
  width: 22px;
  height: 17px;
}
</style>