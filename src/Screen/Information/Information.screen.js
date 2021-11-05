import { Row, Col, Form, Input, Upload, Button, Select, message } from "antd";
import React, { Component } from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./Information.css";
import axios from "axios";

const { Option } = Select;
export class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",

      // data photo
      data: [],
      fileList: [],
      previewVisible: false,
      previewImage: "",

      // data information
      umg_user: this.props.umg_user,
      group: "",
      number: "",
      province_send: "",
      photo64: "",

      // province
      province: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get(
          "https://gecc.dlt.go.th/2021-09-01/licenseplate/lib/datareturn.php?i=3",
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data !== undefined) {
            this.setState({
              province: response.data,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  // handleChange select province
  handleChange(value) {
    this.setState({ province_send: value.value });
  }

  //handlePreview file photo
  handlePreview = (file) => {
    this.setState({
      previewImage: file.thumbUrl,
      previewVisible: true,
    });
  };

  // handleUpload photo
  handleUpload = ({ fileList }) => {
    // this.toBase64(fileList[0].originFileObj);
    this.setState({
      fileList: fileList,
    });
  };

  // convert file to base64
  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result, this.setState({ photo64: reader.result })); // set link base 64 to state
      reader.onerror = (error) => reject(error);
    });

  // send data information to api
  Submitfunction() {
    try {
      const data = {
        i: 1,
        d01: this.state.group,
        d02: this.state.number,
        d03: this.state.province_send,
        d04: this.state.umg_user,
        d05: "",
      };
      console.log(data);
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
          if (response.data.status === "error") {
            message.error(
              "เกิดข้อผิดพลาดบางอย่าง โปรดตรวจสอบความถูกต้องของข้อมูลอีกครั้ง"
            );
          }
          // else {
          //   this.toBase64(this.state.fileList[0].originFileObj);
          //   this.Uploadphoto(response.data.insertid);
          // }
        });
    } catch (error) {}
  }

  // send photo information to api

  Uploadphoto(insertid) {
    try {
      const data = { i: 2, d01: this.state.photo64, d02: insertid };
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
          console.log(response.data);
        });
    } catch (error) {}
  }

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
            <h1 className="text-information-top">Information</h1>
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
                  {/* group */}
                  <Form.Item>
                    <Col
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>หมวด</h3>

                      <Input
                        maxLength={3}
                        className="input-form-information"
                        onChange={(e) =>
                          this.setState({
                            group: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Item>
                  {/* number */}
                  <Form.Item>
                    <Col
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>เลขทะเบียน</h3>

                      <Input
                        className="input-form-information"
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        onChange={(e) => {
                          if (e.target.value.length <= 4) {
                            this.setState({
                              number: e.target.value,
                            });
                          }
                        }}
                        value={this.state.number}
                      />
                    </Col>
                  </Form.Item>
                  {/* province */}
                  <Form.Item>
                    <Col
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>จังหวัด</h3>
                      <Select
                        className="Select-form-information"
                        labelInValue
                        placeholder="จังหวัด"
                        // defaultValue={{ value: "กรุงเทพฯ" }}
                        onChange={(value) => this.handleChange(value)}
                      >
                        {this.state.province.map((data_province, index) => {
                          return (
                            <Option
                              key={index.toString()}
                              value={data_province.PROVINCE_CODE}
                            >
                              {data_province.PROVINCE_NAME}
                            </Option>
                          );
                        })}
                      </Select>
                    </Col>
                  </Form.Item>
                  {/* photo */}
                  <Form.Item>
                    <Col
                      className="col-form-information"
                      xs={{ span: 22, offset: 1 }}
                      sm={{ span: 22, offset: 1 }}
                      xl={{ span: 22, offset: 1 }}
                    >
                      <h3>รูป</h3>
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
                          maxCount={1}
                          listType="picture"
                          // defaultFileList={this.state.fileList}
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
                      sm={{ span: 16, offset: 4 }}
                      xl={{ span: 16, offset: 4 }}
                    >
                      <Button
                        htmlType="submit"
                        className="btn-form-information"
                        onClick={() => this.Submitfunction()}
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
