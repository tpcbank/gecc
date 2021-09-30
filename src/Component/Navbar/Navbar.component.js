import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Report from "../../Screen/Report/Report.screen";
import Scan from "../../Screen/Scan/Scan.screen";
import Information from "../../Screen/Information/Information.screen";

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
              </Menu>
            </Header>
            {/* <Content style={{ padding: "0 50px" }}> */}
            {/* <div className="site-layout-content"> */}
            <Switch>
              <Route exact path="/">
                <Scan />
              </Route>
              <Route path="/report">
                <Report />
              </Route>{" "}
              <Route path="/information">
                <Information />
              </Route>
            </Switch>
            {/* </div> */}
            {/* </Content> */}
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
