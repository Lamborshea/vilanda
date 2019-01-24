<template>
  <div>
    <van-cell-group>
      <van-cell title="网易云音乐" is-link to="/music"/>
      <van-cell title="YouTube" is-link to="/video"/>
    </van-cell-group>
  </div>
</template>
<script lang="ts">
/**
 *
 * @author 谢南波
 */
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
@Component({
  components: {}
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
</style>
