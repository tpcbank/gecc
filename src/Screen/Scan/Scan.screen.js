import { Col, Row } from "antd";
import React, { Component } from "react";
import QrReader from "react-qr-reader";

export class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    }
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
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />
            <h1>data : {this.state.data}</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Scan;
