<template>
  <div class="vi-avatar">
    <img
      src="http://wx.qlogo.cn/mmopen/5iao9PNMxT0WqP0w6xFiaBhXOnjLDOVYOzYKrfuaQFArj9wGGtBYwbF1aialM9ZLYmpybQ1d4RmPRicgntgRlTmLauicSiceYEC1mL/64"
      alt="avatar"
    >
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
export default class Avatar extends Vue {}
</script>
<style lang="scss">
.vi-avatar {
  width: 64px;
  display: flex;
  justify-content: space-between;
}
</style>
