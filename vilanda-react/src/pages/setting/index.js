import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;

export default class Setting extends Component {
  render() {
    return (
      <div>
        <div className="cell-group">
          <List>
            <Item>我的</Item>
          </List>
          <List>
            <Item>我的</Item>
          </List>
          <List>
            <Item>我的</Item>
          </List>
          <List>
            <Item>我的</Item>
          </List>
        </div>
      </div>
    );
  }
}
