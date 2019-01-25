<template>
  <div id="vilanda">
    <a-layout class="l-layout">
      <a-layout-content class="l-body">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="l-footer" v-show="$route.meta.isShowTabbar">
        <van-tabbar v-model="active">
          <van-tabbar-item
            v-for="item in tabbar"
            :key="item.title"
            :icon="item.icon"
            :to="item.to"
          >{{item.title}}</van-tabbar-item>
        </van-tabbar>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import { mapGetters, mapState } from "vuex";
import * as rootTypes from "@/store/types";
export default Vue.extend({
  data() {
    return {
      active: 2
    };
  },
  computed: {
    ...mapGetters({
      tabbar: rootTypes.GET_TABBAR
    })
  }
});
</script>


<style lang="scss">
html,
body,
.l-layout {
  height: 100%;
}

#vilanda {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.l-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
}
</style>
