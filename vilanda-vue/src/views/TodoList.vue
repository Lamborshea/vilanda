<template>
  <div class="page-todo">
    <a-layout class="todo-layout">
      <a-layout-header class="header">
        <van-nav-bar class="header-inner" :title="$route.meta.title"/>
      </a-layout-header>
      <van-swipe-cell
        v-for="item in listData"
        :key="item._id"
        :right-width="65"
        :left-width="0"
        :on-close="onClose(item)"
      >
        <van-cell-group class="todo-item">
          <van-checkbox
            @change="handleChangeCheckbox(item)"
            class="todo-item-checkbox van-ellipsis van-hairline--bottom"
            v-model="item.checked"
          >{{item.title}}</van-checkbox>
        </van-cell-group>
        <span slot="right">删除</span>
      </van-swipe-cell>

      <van-cell-group>
        <van-field
          v-model="addDataTitle"
          center
          clearable
          placeholder="完成流利说打卡"
        >
          <van-button
            @click="handleSubmitAdd"
            slot="button"
            size="small"
            type="primary"
          >新增</van-button>
        </van-field>
      </van-cell-group>
    </a-layout>
  </div>
</template>
<script lang="ts">
/**
 *
 * @author 谢南波
 */
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";
@Component({
  components: {}
})
export default class App extends Vue {
  listData = [];
  addDataTitle = "";

  onClose(data: any) {
    return (clickPosition: String, instance: { close: Function }) => {
      switch (clickPosition) {
        case "left":
          console.log("left");
          break;
        case "cell":
          console.log("cell");
          break;
        case "outside":
          console.log("outside");
          instance.close();
          break;
        case "right":
          console.log("right");
          this.$dialog
            .confirm({
              message: `确定删除${data.title}吗？`
            })
            .then(() => {
              Request.todolist.deleteData(data._id).then(() => {
                this.getListData().then(() => {
                  instance.close();
                });
              });
            });
          break;
      }
    };
  }

  async getData() {
    const response = await Http.post(Url.todolist.getTodo);
    const result = response.data;
    return result;
  }

  handleChangeCheckbox(item: any) {
    Request.todolist.updateData(item._id, item.checked).then(() => {
      this.getListData();
    });
  }

  handleSubmitAdd() {
    Request.todolist.addData(this.addDataTitle).then(() => {
      this.addDataTitle = "";
      this.getListData();
    });
  }

  async getListData() {
    await this.getData().then((result: any) => {
      this.listData = result.data;
    });
  }

  created() {
    this.getListData();
  }
}
</script>
<style lang="scss">
.page-todo {
  .header {
    height: 64px;
    background-color: #fff;
    padding: 0;
  }
  .header-inner {
    height: 64px;
    line-height: 64px;
  }
  .van-nav-bar__title {
    font-size: 18px;
  }
  .van-swipe-cell__left {
    color: #1890ff;
    font-size: 15px;
    width: 65px;
    height: 48px;
    display: inline-block;
    text-align: center;
    line-height: 48px;
  }
  .van-swipe-cell__right {
    color: #ff4d4f;
    font-size: 15px;
    width: 65px;
    height: 48px;
    display: inline-block;
    text-align: center;
    line-height: 48px;
  }
}

.todo-group {
  padding: 16px;
}
.todo-item {
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 48px;
}
.todo-item-checkbox {
}
</style>
