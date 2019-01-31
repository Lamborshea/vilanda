import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Api from "../../api/index";
class TodoList extends Component {
  constructor() {
    super();
    this.state = { todolist: [] };
  }
  componentDidMount() {
    Api.todolist.getData().then(result => {
      this.setState({
        todolist: result
      });
    });
  }
  render() {
    const todolist = this.state.todolist;
    return (
      <div className="todo-list">
        {todolist.map((item, index) => {
          return (
            <TodoItem key={index} title={item.title} checked={item.checked} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
