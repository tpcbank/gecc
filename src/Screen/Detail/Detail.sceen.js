import { Button, Col, Row } from "antd";
import React, { Component } from "react";
import "./Detail.css";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.location.state,
    };
  }
  render() {
    // console.log(this.state.data.address);
    return (
      <div className="content-detail">
        <Row>
          <Col
            className="col-detail-content"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row>
              <Col
                className="col-detail-top"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h1>ใบนัดอิเล็กทรอนิกส์</h1>
              </Col>
            </Row>
            {Object.entries(this.state.data).map(([key, value]) => {
              return (
                <Row>
                  <Col
                    className="col-detail-sup"
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                  >
                    <h3>
                      {key} = {value}
                    </h3>
                  </Col>
                </Row>
              );
            })}

            <Row>
              {this.state.data !== [] && this.state.data !== undefined ? (
                <Col
                  className="col-detail-QRcode"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 16, offset: 4 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  <QRCode value={this.state.data.name} />
                  {/* <h4>{this.state.data.address}</h4> */}
                </Col>
              ) : null}
            </Row>
            <Row>
              <Col
                className="col-detail-sup"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 6, offset: 4 }}
                xl={{ span: 6, offset: 4 }}
              >
                <Link to={{ pathname: "/edit", state: this.state.data }}>
                  <Button>แก้ไข</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
