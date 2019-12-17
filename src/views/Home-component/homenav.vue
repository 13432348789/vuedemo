.<template>
  <div class="header">
    <div class="headerImg">
      <a href="#">
        <img width="100%" height="100%" src="../../assets/img/157337094914671778.gif" />
      </a>
    </div>
    <div class="content" :class="searchBarFixed == true ? 'isFixed' :''">
      <div class="classify">
        <span @click="handel"></span>
      </div>
      <div class="search">
        <form>
          <input @click="handel2" class="searchIput" type="text" placeholder="商品/店铺" />
        </form>
      </div>
      <div class="login">
        <router-link to="/My">
          <span></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homenav",
  data() {
    return {
      searchBarFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handel() {
      this.$router.push({
        path: "/Category"
      });
    },
    handel2 () {
      this.$router.push({
        path: "/Search"
      })
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      var offsetTop = document.querySelector(".content").offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.isFixed {
  position: fixed;
  background: rgb(33, 100, 231);
  top: 0;
  z-index: 999;
}
.header {
  background-image: url("../../assets/blue/157488034421386488.jpg");
  background-size: 100% 100%;
}
.headerImg a {
  display: block;
  width: 100%;
  height: 100%;
}
.headerImg a img {
  margin-left: -30px;
}
.header .content {
  width: 100%;
  height: 48px;
  line-height: 48px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header .content .classify {
  margin-right: 15px;
}
.header .content .classify span {
  margin: 8px 0 0 15px;
  background-image: url("../../assets/img/157199320847433454.png");
  background-size: 100% 100%;
  width: 20px;
  height: 33px;
  display: block;
}
.header .content .search {
  width: 100%;
  margin: 0 auto;
}
.header .content .search .searchIput {
  width: 100%;
  height: 33px;
  line-height: 33px;
  border: none;
  border-radius: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  color: #999;
}
.header .content .login {
  margin-left: 15px;
}
.header .content .login span {
  background-image: url("../../assets/img/157199321817918653.png");
  margin: 8px 15px 0 0;
  background-size: 100% 100%;
  width: 20px;
  height: 33px;
  display: block;
}
</style>