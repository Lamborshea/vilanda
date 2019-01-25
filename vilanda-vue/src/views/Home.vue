<template>
  <div class="home">
    <van-nav-bar title="主页" left-text right-text/>
    <van-cell-group>
      <van-cell title="网易云音乐" is-link to="/music"/>
      <van-cell title="YouTube" is-link to="/video"/>
      <van-cell title="Tmall" is-link to="/airbnb"/>
      <van-cell title="Kindle" is-link to="/kindle"/>
      <van-cell title="Weather" is-link to="/weather"/>
      <van-cell title="Airbnb" is-link to="/airbnb"/>
      <van-cell title="Google" is-link url="https://google.xienanbo.com"/>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
</style>

