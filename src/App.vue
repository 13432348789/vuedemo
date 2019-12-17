<template>
  <div id="app">
    <router-view />
    <tabbar v-if="$route.meta.keepAlive"/>
  </div>
</template>


<script>
// import Home from '../../app/src/views/Home'
import tabbar from ".././src/components/Tabbar/Tabbar";

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    tabbar,
  }
};
</script>


<style>
</style>
