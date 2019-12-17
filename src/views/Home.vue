<template>
  <div class="Home">
    <homenav />
    <horview />
    <swiper />
    <enter />
    <tImgfloor />
    <cart />
    <horview2 />
    <list />
    <Twocart />
    <xbanner />
    <guessUlike />

    <backTop /> 
  </div>
</template>

<script>
import homenav from "./Home-component/homenav";
import swiper from "./Home-component/swiper";
import enter from "./Home-component/enter";
import horview from "./Home-component/horview";
import horview2 from "./Home-component/horview2";
import tImgfloor from "./Home-component/tImgfloor";
import cart from "./Home-component/cart";
import xbanner from "./Home-component/xbanner";
import list from "./Home-component/list";
import Twocart from "./Home-component/Twocart";
import guessUlike from "./Home-component/guessUlike";

import backTop from "./scomponent/backTop";

export default {
  name: "Home",
  components: {
    homenav,
    swiper,
    enter,
    horview,
    tImgfloor,
    cart,
    xbanner,
    list,
    Twocart,
    guessUlike,
    horview2,
    backTop
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333;
}
body {
  background: #f2f2f2;
  /* padding-bottom: 1.3rem; */
}
.Home {
  position: relative;
}
</style>