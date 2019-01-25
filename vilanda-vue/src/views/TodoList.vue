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
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Http from "@/api/Http";
import * as Code from "@/api/Code";
import Url from "@/api/Url";
import Request from "@/api/Request";
import * as TodoTypes from "@/store/modules/todo/mutation_types";
import { TodoEnum } from "@/enum/todolist";
@Component({
  components: {}
})
export default class TodoList extends Vue {
  addDataTitle = "";

  @Getter(TodoTypes.GET_TODO_LIST, { namespace: TodoEnum.storeModule })
  listData!: Array<any>;

  @Action(TodoTypes.FETCH_TODO_LIST, { namespace: TodoEnum.storeModule })
  fetchTodoList: any;

  @Action(TodoTypes.ADD_TODO, { namespace: TodoEnum.storeModule })
  addTodo: any;

  @Action(TodoTypes.UPDATE_TODO, { namespace: TodoEnum.storeModule })
  updateTodo: any;

  @Action(TodoTypes.DELETE_TODO, { namespace: TodoEnum.storeModule })
  deleteTodo: any;

  onClose(data: any) {
    return (clickPosition: String, instance: { close: Function }) => {
      switch (clickPosition) {
        case "left":
          break;
        case "cell":
          break;
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: `Are you sure delete the ${data.title}?`
            })
            .then(() => {
              this.deleteTodo(data._id).then((status: boolean) => {
                instance.close();
              });
            })
            .catch(() => {
              instance.close();
            });
          break;
      }
    };
  }

  handleChangeCheckbox(item: any) {
    this.updateTodo(item).then((status: boolean) => {
      if (status === true) {
        this.fetchTodoList();
      }
    });
  }

  handleSubmitAdd() {
    this.addTodo(this.addDataTitle).then((status: boolean) => {
      this.addDataTitle = "";
    });
  }

  created() {}
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
</style>
