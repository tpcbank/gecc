import { Button, Col, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Camera from "./../../Img/camera-scan.gif";
import "./Scan.css";

export class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      show: false,
      video: false,
      switchScan: false,
      file: false,
    };
  }
  componentDidMount() {}
  handleScan = (data) => {
    if (data) {
      this.setState({
        data: data,
      });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  onShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  onSwitch = () => {
    this.setState({
      switchScan: !this.state.switchScan,
    });
  };

  openImageDialog = () => {
    this.setState({
      file: true,
    });
    this.refs.qrReader1.openImageDialog();
  };

  render() {
    return (
      <div>
        <Row>
          <Col
            className="col-information-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1>Scan</h1>
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
            {this.state.switchScan ? (
              // Upload
              <Row>
                <Col
                  className="Col-scan"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 16, offset: 4 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  <Row>
                    <Col
                      className="Col-scan"
                      xs={{ span: 20, offset: 2 }}
                      sm={{ span: 16, offset: 4 }}
                      xl={{ span: 12, offset: 6 }}
                    >
                      <QrReader
                        ref="qrReader1"
                        className="photo-qrcode"
                        delay={200}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        legacyMode
                      />
                    </Col>
                  </Row>
                  <Button
                    icon={<UploadOutlined />}
                    onClick={this.openImageDialog}
                  >
                    Click to Upload QRcode
                  </Button>
                </Col>
              </Row>
            ) : (
              // Scan
              <Row>
                <Col
                  className="Col-scan"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 16, offset: 4 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  {this.state.show ? (
                    <Row>
                      <Col
                        className="Col-scan"
                        xs={{ span: 20, offset: 2 }}
                        sm={{ span: 16, offset: 4 }}
                        xl={{ span: 16, offset: 4 }}
                      >
                        <QrReader
                          delay={300}
                          onError={this.handleError}
                          onScan={this.handleScan}
                          className="QRcodeScan"
                          facingMode="user"
                        />
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col
                        className="Col-scan"
                        xs={{ span: 20, offset: 2 }}
                        sm={{ span: 16, offset: 4 }}
                        xl={{ span: 16, offset: 4 }}
                      >
                        <img src={Camera} alt={" "} className="img-scan" />
                      </Col>
                    </Row>
                  )}
                  <Row>
                    <Col
                      className="Col-scan"
                      xs={{ span: 20, offset: 2 }}
                      sm={{ span: 12, offset: 6 }}
                      xl={{ span: 12, offset: 6 }}
                    >
                      <Button
                        onClick={this.onShow}
                        className={
                          "btn-show-scan" + (this.state.show ? "stop" : "start")
                        }
                      >
                        {this.state.show ? "Stop Scan" : "Start Scan"}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}

            <Row>
              <Col
                className="change-switch"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <Button onClick={this.onSwitch}>
                  {this.state.switchScan ? "แสกนด้วยกล้อง" : "เลือกรูป"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h1>data : {this.state.data}</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Scan;
