import React, { Component } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Report from "../../Screen/Report/Report.screen";
import Scan from "../../Screen/Scan/Scan.screen";
import Information from "../../Screen/Information/Information.screen";
import Product from "../../Screen/Product/Product.component";
import Detail from "../../Screen/Detail/Detail.sceen";
import Edit from "../../Screen/Edit/Edit.sceen";
import Print from "../../Screen/Print/Print.sceen";
import MenuComponent from "./Menu.component";
import DetailScan from "../../Screen/Detail/DetailScan";

const { Header, Content, Footer } = Layout;

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { umg_user: this.props.umg_user };
  }
  render() {
    const HeaderWithRouter = withRouter(MenuComponent);

    return (
      <div>
        <Router>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <HeaderWithRouter />
            </Header>
            <Content>
              <Switch>
                <Route exact path="/">
                  <Scan umg_user={this.state.umg_user} />
                </Route>
                <Route path="/report">
                  <Report umg_user={this.state.umg_user} />
                </Route>
                <Route path="/information">
                  <Information umg_user={this.state.umg_user} />
                </Route>
                <Route path="/product">
                  <Product umg_user={this.state.umg_user} />
                </Route>
                <Route path="/detail" component={Detail} />
                <Route path="/detailScan" component={DetailScan} />
                <Route path="/edit" component={Edit} />
                <Route path="/print" component={Print} />
              </Switch>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Website .... ©2021 Created by Tabsoft
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default Navbar;
