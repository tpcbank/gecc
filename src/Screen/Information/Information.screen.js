import { Row, Col, Form, Input, Upload, Button } from "antd";
import React, { Component } from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./Information.css";

export class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      priceIn: "",
      priceOut: "",
      status: "",

      data: [],
      fileList: [],
      previewVisible: false,
      previewImage: "",
    };
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.thumbUrl,
      previewVisible: true,
    });
  };

  handleUpload = ({ fileList }) => {
    let formData = new FormData();
    for (var i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i].originFileObj);
    }
    console.log(...formData);

    this.setState({
      fileList: formData,
    });
  };

  sendData = () => {
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      priceIn: this.state.priceIn,
      priceOut: this.state.priceOut,
      fileList: this.state.fileList,
    };
    console.log(data);
  };

  render() {
    return (
      <div className="content-information">
        {/* Row header */}
        <Row>
          <Col
            className="col-information-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1>Information</h1>
          </Col>
        </Row>
        {/* Row Sub & form */}
        <Row>
          <Col
            className="col-information-sub"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row>
              <Col
                className="col-form-information-content"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Name</h3>

                      <Input
                        className="input-form-information"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Phone</h3>

                      <Input
                        className="input-form-information"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>PriceIn</h3>

                      <Input
                        className="input-form-information"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>PriceOut</h3>

                      <Input
                        className="input-form-information"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>Photo</h3>
                      <Col
                        className="col-form-upload-information"
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 16, offset: 4 }}
                        xl={{ span: 16, offset: 4 }}
                      >
                        <Upload
                          className="form-upload-information"
                          beforeUpload={() => false}
                          onPreview={this.handlePreview}
                          onChange={this.handleUpload}
                          listType="picture"
                          defaultFileList={this.state.fileList}
                        >
                          <Button
                            className="btn-upload-information"
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
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-form-information"
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

export default Information;
