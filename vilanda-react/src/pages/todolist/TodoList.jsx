import React, { Component } from "react";
// import TodoItem from "./TodoItem";
import Api from "../../api/index";
import "./todolist.css";
import { Button, List, Checkbox, SwipeAction } from "antd-mobile";
const CheckboxItem = Checkbox.CheckboxItem;
class TodoList extends Component {
  constructor({ match }) {
    super();
    this.state = { todoTitle: "", todolist: [] };
  }
  onChange(todo, event) {
    let result = this.state.todolist;
    result.forEach(item => {
      if (item._id === todo._id) {
        item.checked = event.target.checked;
      }
    });
    this.setState({
      todolist: result
    });
    Api.todolist.updateData(todo._id, event.target.checked).then(result => {
      this.getData();
    });
  }

  onAddChange(event) {
    this.setState({
      todoTitle: event.target.value
    });
  }

  handleAdd() {
    console.log(this.state.todoTitle);
    Api.todolist.addData(this.state.todoTitle).then(result => {
      let todoList = this.state.todolist;
      todoList.push(result);
      this.setState({
        todolist: todoList
      });
    });
  }

  handleDelete(data) {
    Api.todolist.deleteData(data._id).then(result => {
      let todoList = this.state.todolist;
      let index = todoList.findIndex(item => {
        return item._id === data._id;
      });
      todoList.splice(index, 1);
      this.setState({
        todolist: todoList
      });
    });
  }

  getData() {
    Api.todolist.getData().then(result => {
      this.setState({
        todolist: result
      });
    });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    const todolist = this.state.todolist;
    return (
      <div className="todo-list">
        <List renderHeader={() => "TODO list"}>
          <SwipeAction>
            {todolist
              ? todolist.map(i => (
                  <SwipeAction
                    key={i._id}
                    style={{ backgroundColor: "gray" }}
                    autoClose
                    right={[
                      {
                        text: "Delete",
                        onPress: () => this.handleDelete(i),
                        style: { backgroundColor: "#F4333C", color: "white" }
                      }
                    ]}
                  >
                    <CheckboxItem
                      checked={i.checked}
                      onChange={event => this.onChange(i, event)}
                    >
                      {i.title}
                    </CheckboxItem>
                  </SwipeAction>
                ))
              : null}
          </SwipeAction>
        </List>
        <div className="add-input-wrap">
          <input
            className="add-input"
            placeholder="写博客"
            autoFocus="on"
            type="text"
            value={this.state.todoTitle}
            onChange={event => this.onAddChange(event)}
          />
        </div>
        <Button
          className="add-btn"
          type="primary"
          onClick={() => this.handleAdd()}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default TodoList;
