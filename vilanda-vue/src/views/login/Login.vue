<template>
  <div class="view-login">
    <div class="login-panel">
      <van-cell-group>
        <van-field
          v-model="user.username"
          clearable
          label="username"
          left-icon="contact"
          icon="question-o"
          placeholder="phone | email "
          @click-icon="$toast('question')"
        />

        <van-field
          left-icon="closed-eye"
          v-model="user.password"
          type="password"
          label="password"
        />
      </van-cell-group>
      <div class="login-btn-wrapper">
        <a-button type="primary" @click="handleLogin" block>login</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * Login
 * @author 谢南波
 */
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";
import * as userTypes from "@/store/modules/user/types";
import md5 from "md5";
@Component({
  components: {}
})
export default class Login extends Vue {
  user = {
    username: "",
    password: ""
  };

  @Action(userTypes.LOGIN, { namespace: "user" })
  login!: Function;

  handleLogin() {
    let username = this.user.username;
    let password = md5(this.user.password);
    this.login({ username, password }).then((status: any) => {
      if (status) {
        this.$toast("登录成功");
        this.$router.push("/");
      }
    });
  }
}
</script>
<style lang="scss">
.view-login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.login-panel {
  width: 100%;
  align-self: center;
}
.login-btn-wrapper {
  margin-top: 24px;
}
</style>
