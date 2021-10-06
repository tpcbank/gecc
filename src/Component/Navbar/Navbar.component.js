import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Report from "../../Screen/Report/Report.screen";
import Scan from "../../Screen/Scan/Scan.screen";
import Information from "../../Screen/Information/Information.screen";
import Product from "../../Screen/Product/Product.component";
import Detail from "../../Screen/Detail/Detail.sceen";
import Edit from "../../Screen/Edit/Edit.sceen";
import Print from "../../Screen/Print/Print.sceen";

const { Header, Footer } = Layout;

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/" />
                  Home
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/report" />
                  Report
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/information" />
                  Information
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/product" />
                  Product
                </Menu.Item>
              </Menu>
            </Header>

            <Switch>
              <Route exact path="/" component={Scan} />
              <Route path="/report" component={Report} />
              <Route path="/information" component={Information} />
              <Route path="/product" component={Product} />
              <Route path="/detail" component={Detail} />
              <Route path="/edit" component={Edit} />
              <Route path="/print" component={Print} />
            </Switch>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default Navbar;
