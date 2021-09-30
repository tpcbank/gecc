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
                  <Link to="/dlt-api1" />
                  Home
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/dlt-api1/report" />
                  Report
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/dlt-api1/information" />
                  Information
                </Menu.Item>
              </Menu>
            </Header>
            {/* <Content style={{ padding: "0 50px" }}> */}
            {/* <div className="site-layout-content"> */}
            <Switch>
              <Route exact path="/dlt-api1">
                <Scan />
              </Route>
              <Route path="/dlt-api1/report">
                <Report />
              </Route>{" "}
              <Route path="/dlt-api1/information">
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
