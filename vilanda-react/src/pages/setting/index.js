import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

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
