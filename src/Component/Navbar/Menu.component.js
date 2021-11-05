import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu mode="horizontal" selectedKeys={this.props.location.pathname}>
        <Menu.Item key="/">
          <Link to="/" />
          Home
        </Menu.Item>
        <Menu.Item key="/report">
          <Link to="/report" />
          Report
        </Menu.Item>
        <Menu.Item key="/information">
          <Link to="/information" />
          Information
        </Menu.Item>
        <Menu.Item key="/product">
          <Link to="/product" />
          Product
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuComponent;
