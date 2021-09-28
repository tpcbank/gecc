import { Row, Col, Form, Input, Button } from "antd";
import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onLogin = () => {
    console.log("login");
  };
  render() {
    return (
      <div className="content-login">
        <Row className="row-login" justify="center" align="top">
          <Col className="col-login" xs={20} sm={10} xl={10}>
            <h1 className="title-text">เข้าสู่ระบบ</h1>
            <Row>
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Form className="form-page-input">
                  {/* username */}
                  <Form.Item
                    className="form-input-login"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      className="input-login-username"
                      onChange={(e) =>
                        this.setState({
                          passport: e.target.value,
                        })
                      }
                      placeholder="Username"
                    />
                  </Form.Item>
                  {/* password */}
                  <Form.Item
                    className="form-input-login"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="input-login-password"
                      onChange={(e) =>
                        this.setState({
                          password: e.target.value,
                        })
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item className="form-button-loginpage">
                    <Button
                      className="btn-form-login"
                      type="primary"
                      htmlType="submit"
                      onClick={() => this.onLogin()}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
