<template>
  <div class="view-home">
    <van-nav-bar title="Vilanda" left-text right-text/>
    <van-swipe :autoplay="3000" class="swipe-container">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
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
import { Lazyload } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload);
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  images = [
    "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
    "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg",
    "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
    "https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg"
  ];
}
</script>
<style lang="scss">
.view-home {
  .swipe-container {
    margin: 16px 8px;
    border-radius: 6px;
  }
  .swipe-container img {
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
  }
}
</style>

