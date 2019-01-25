<template>
  <div class="view-register">
    <div class="login-panel">
      <van-cell-group>
        <van-field
          v-model="user.username"
          clearable
          label="username"
          left-icon="contact"
          placeholder="phone | email "
          @click-icon="$toast('question')"
        />

        <van-field
          v-model="user.password"
          left-icon="closed-eye"
          type="password"
          label="password"
          clearable
        />
      </van-cell-group>
      <div class="login-btn-wrapper">
        <a-button type="primary" @click="handleRegister" block>Register</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * Register
 * @author 谢南波
 */
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";
import md5 from "md5";
import * as userTypes from "@/store/modules/user/types";

@Component({
  components: {}
})
export default class Login extends Vue {
  user = {
    username: "",
    password: ""
  };

  @Action(userTypes.REGISTER, { namespace: "user" })
  register!: Function;

  handleRegister() {
    let username = this.user.username;
    let password = md5(this.user.password);
    this.register({ username, password }).then((status: any) => {
      if (status) {
        this.$toast("注册成功");
        this.$router.push("/login");
      }
    });
  }
}
</script>
<style lang="scss">
.view-register {
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
