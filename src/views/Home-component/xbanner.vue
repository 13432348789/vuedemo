<template>
  <div class="xbanner">
    <img class="img1" src="../../assets/blue/157486766345024433.png">
    <!-- <div class="banner">
      <transition name="bounce">
        <img v-if="show" class="imgs" :src="Img">
      </transition>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      Img: "/static/0.jpg",
      index: 0,
      show: true
    };
  },
  methods: {
    fun() {
      this.index++;
      if (this.index == 3) {
        this.index = 0;
      }
      this.Img = `/static/${this.index}.jpg`;
      this.show = !this.show
    }
    // fun() {
    //   let img = document.querySelector(".imgs");
    //   let index = 0;
    //   let swi = false;

    //   setInterval(function() {
    //     img.style.transform = "scale(0)";
    //   }, 5000);

    //   addEventListener("transitioncancel", function() {

    //     console.log("transitioncancel")
    //     index++;
    //     if (index == 3) {
    //       index = 0;
    //     }
    //     if (swi == true) {
    //       // img.src = `../static/${index}.jpg`;
    //       this.Img =  `../static/${index}.jpg`;
    //       console.log(index);
    //       swi = false;
    //     }
    //   });

    //   addEventListener("transitionend", function() {
    //     console.log('transitionend')
    //     img.style.transform = "scale(1)";
    //     swi = true;
    //   });
    //   console.log(img);
    // }
  },
  mounted() {
    setInterval(() => {
      this.fun();
    }, 500);
    // this.fun();
  }
};
</script>

<style  scoped>


.bounce-enter-active {
  animation: none;
}
.bounce-leave-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
 
  100% {
    transform: scale(0);
  }
}


.xbanner {
  width: 100%;
  position: relative;
  background:rgb(33, 100, 231);
  padding-top: 10px;
  padding-bottom: 5PX;
}
.img1 {
  width: 100%;
  position: relative;
}
/*     */
</style>