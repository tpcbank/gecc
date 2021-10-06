import { Col, Row, Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import "./Edit.css";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      name: "",
      phone: "",
      priceIn: "",
      priceOut: "",
      status: "",
      fileList: [],
      previewVisible: false,
      previewImage: "",
      data: props.location.state,
    };
  }
  render() {
    console.log("edit", this.props.location.state);
    return (
      <div className="content-edit">
        {/* Row header */}
        <Row>
          <Col
            className="col-edit-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1>Edit</h1>
          </Col>
        </Row>
        {/* Row Sub & form */}
        <Row>
          <Col
            className="col-edit-sub"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row>
              <Col
                className="col-form-edit-content"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <Form name="nest-messages">
                  {/* Name */}
                  <Form.Item
                    name={"name"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Name</h3>

                      <Input
                        className="input-form-edit"
                        placeholder={this.state.data.name}
                        onChange={(e) =>
                          this.setState({
                            name: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Item>
                  {/* phone */}
                  <Form.Item
                    name={"phone"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Phone</h3>

                      <Input
                        className="input-form-edit"
                        placeholder={this.state.data.Phone}
                        onChange={(e) =>
                          this.setState({
                            phone: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Item>
                  {/* priceIn */}
                  <Form.Item
                    name={"priceIn"}
                    // label="priceIn"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>PriceIn</h3>

                      <Input
                        className="input-form-edit"
                        placeholder={this.state.data.PriceIn}
                        onChange={(e) =>
                          this.setState({
                            priceIn: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Item>
                  {/* pricrOut */}

                  <Form.Item
                    name={"priceOut"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>PriceOut</h3>

                      <Input
                        className="input-form-edit"
                        placeholder={this.state.data.PriceOut}
                        onChange={(e) =>
                          this.setState({
                            priceOut: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Item>
                  {/* photo */}
                  <Form.Item
                    name={"photo"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Photo</h3>
                      <Col
                        className="col-form-upload-edit"
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 16, offset: 4 }}
                        xl={{ span: 16, offset: 4 }}
                      >
                        <Upload
                          className="form-upload-edit"
                          beforeUpload={() => false}
                          onPreview={this.handlePreview}
                          onChange={this.handleUpload}
                          listType="picture"
                          defaultFileList={this.state.fileList}
                        >
                          <Button
                            className="btn-upload-edit"
                            icon={<UploadOutlined />}
                          >
                            Upload
                          </Button>
                        </Upload>
                      </Col>
                    </Col>
                  </Form.Item>
                  {/* button */}
                  <Form.Item>
                    <Col
                      className="col-form-edit"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 16, offset: 4 }}
                      xl={{ span: 16, offset: 4 }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-form-edit"
                        onClick={this.sendData}
                      >
                        Submit
                      </Button>
                    </Col>
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

export default Edit;
