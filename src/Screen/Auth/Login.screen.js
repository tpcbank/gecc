import { Row, Col, Form, Input, Button, message } from "antd";
import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onLogin() {
    try {
      const data = {
        i: 5,
        d01: this.state.username,
        d02: this.state.password,
      };
      axios
        .get(
          "https://gecc.dlt.go.th/2021-09-01/licenseplate/lib/datareturn.php?",
          {
            params: data,
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("asd", response.data);
          if (response.data.length !== 0) {
            this.props.callbackUsername(response.data[0].umg_user);
          } else {
            message.error(
              "เกิดข้อผิดพลาดบางอย่าง โปรดตรวจสอบความถูกต้องของข้อมูลอีกครั้ง"
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
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
                        message: "กรุณาใส่ยูสเซอร์เนม",
                      },
                    ]}
                  >
                    <Input
                      className="input-login-username"
                      onChange={(e) =>
                        this.setState({
                          username: e.target.value,
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
                        message: "กรุณาใส่รหัสผ่าน",
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
