import React, { Component } from "react";
// import logo from "./logo.svg";

import Tabbar from "./components/tabbar/index";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        { label: "Todo", icon: "check-circle-o", to: "/todo" },
        { label: "Tmall", icon: "check-circle-o", to: "/" },
        { label: "Wechat", icon: "check-circle-o", to: "/" },
        { label: "Settings", icon: "ellipsis", to: "/setting" }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Tabbar tabs={this.state.tabs} fixed />
      </div>
    );
  }
}

export default App;
