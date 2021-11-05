import { Button, Col, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Camera from "./../../Img/camera-scan.gif";
import "./Scan.css";
import { Link } from "react-router-dom";

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

  onSwitchScan = () => {
    this.setState({
      switchScan: false,
    });
  };
  onSwitchUpload = () => {
    this.setState({
      switchScan: true,
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
      <div className="content-scan">
        <Row>
          <Col
            className="col-scan-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1 className="text-scan-title">Scan</h1>
          </Col>
        </Row>
        {/* Row Sub & form */}
        <Row>
          <Col
            className="col-scan-sub"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row className="row-btn-header">
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 8, offset: 4 }}
                xl={{ span: 8, offset: 4 }}
              >
                <Button
                  onClick={this.onSwitchScan}
                  className={
                    "btn-header" + (this.state.switchScan ? "stop" : "start")
                  }
                >
                  สแกน QRcode
                </Button>
              </Col>
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                <Button
                  onClick={this.onSwitchUpload}
                  className={
                    "btn-header" + (this.state.switchScan ? "start" : "stop")
                  }
                >
                  อัพโหลดรูป QRcode
                </Button>
              </Col>
            </Row>
            {this.state.switchScan ? (
              // Upload
              <Row>
                <Col
                  className="Col-scan-upload"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 16, offset: 4 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  <Row>
                    <Col
                      className="Col-scan-upload"
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
                    className="btn-upload"
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
                        xl={{ span: 10, offset: 7 }}
                      >
                        <QrReader
                          delay={300}
                          onError={this.handleError}
                          onScan={this.handleScan}
                          className="QRcodeScan"
                          facingMode={"user"}
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

            {/* data */}
            <Row className="row-data">
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h1>
                  data :{" "}
                  <Link
                    to={{ pathname: "/detailScan", state: this.state.data }}
                  >
                    <a>{this.state.data}</a>
                  </Link>{" "}
                </h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Scan;
