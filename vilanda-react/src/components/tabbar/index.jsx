import React, { Component } from "react";
import "./tabbar.css";
import { Icon } from "antd-mobile";
import { Link } from "react-router-dom";
export default class Tabbar extends Component {
  render() {
    let tabs = this.props.tabs;
    return (
      <div
        className={
          this.props.fixed ? "tabbar-group tabbar-group-fixed" : "tabbar-group"
        }
      >
        <ul className="tabbar-menu">
          {tabs
            ? tabs.map(item => (
                <li className="tabbar-item" key={item.label}>
                  <Link to={item.to}>
                    <Icon
                      className="tabbar-item-icon"
                      type={item.icon}
                      size="xxs"
                    />
                    <p className="tabbar-item-label">{item.label}</p>
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}
