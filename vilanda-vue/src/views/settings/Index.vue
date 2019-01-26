<template>
  <div class="view-settings">
    <div class="avatar-container">
      <div class="user-info">{{userinfo.username}}</div>
      <Avatar @click.native="handleUpload"></Avatar>
      <input
        id="js-vilanda-avatar-input"
        name="attachFileName"
        style="display:none"
        @change="handleChange"
        type="file"
        accept="image/*"
        multiple
      >
    </div>
    <van-cell-group class="cell-panel">
      <van-cell title="登录" is-link to="/login"/>
      <van-cell title="注册" is-link to="/register"/>
    </van-cell-group>
    <a-button type="primary" @click="handleDownload" block>Download</a-button>
  </div>
</template>
<script lang="ts">
/**
 *
 * @author 谢南波
 */
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import Avatar from "@/components/user/Avatar.vue";
import Http from "@/api/Http";
@Component({
  components: {
    Avatar
  }
})
export default class Settings extends Vue {
  @Getter("getUserInfo", { namespace: "user" })
  userinfo!: any;

  handleUpload() {
    const inputEl: HTMLElement | null = document.getElementById(
      "js-vilanda-avatar-input"
    );

    if (inputEl) {
      inputEl.click();
    }
  }
  handleChange(e: any) {
    const files = e.target.files;
    console.log(files[0]);
    if (files) {
      Http.postFile("/upload/single", files);
    }
  }
  handleDownload() {
    Http.downloadFile("/download/file", {
      fileName: "1548463729984-Coldplay.png"
    });
  }
}
</script>
<style lang="scss">
.avatar-container {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 16px 16px 0;
  background-color: #fff;
  .user-info {
    height: 64px;
    line-height: 64px;
    font-size: 20px;
  }
}
.view-settings {
  .cell-panel {
    margin-top: 16px;
  }
}
</style>
