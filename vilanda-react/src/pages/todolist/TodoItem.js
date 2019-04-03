import React, { Component } from "react";

class TodoItem extends Component {
  handleOnChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="todo-item" draggable={this.props.draggable}>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleOnChange}
        />
        <span className="todo-title">{this.props.title}</span>
      </div>
    );
  }
}

export default TodoItem;
