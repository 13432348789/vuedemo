<template>
  <div id="bt" v-if="btnFlag">
    <img @click="backTop" class="btimg" src="../../assets/img/backTop.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnFlag: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 700) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#bt {
  width: 40PX;
  height: 40PX;
  line-height: 55PX;
  text-align: center;
  background: #5b6167;
  position: fixed;
  bottom: 65PX;
  right: 10PX;
  border-radius: 20PX;
  //  display: none;
}
#bt img {
  width: 40%;
}
</style>