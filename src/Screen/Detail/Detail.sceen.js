import { Button, Col, Row } from "antd";
import React, { Component } from "react";
import "./Detail.css";
import axios from "axios";

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state,
      number: "",
      dateCreate: "",
      adminCreate: "",
      status: "",
      lcp_user_use: "",
      lcp_dt_use: "",
    };
  }

  componentDidMount() {
    try {
      const data = { i: 7, d01: this.state.id };
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
          console.log(response.data.length);
          if (response.data.length !== 0) {
            if (response.data[0].lcp_status === "1") {
              this.setState({
                status: "รอใช้งาน",
              });
            } else if (response.data[0].lcp_status === "2") {
              this.setState({
                status: "สำเร็จ",
              });
            } else {
              this.setState({
                status: "ยกเลิก",
              });
            }

            this.setState({
              number:
                response.data[0].lcp_group +
                " " +
                response.data[0].lcp_number +
                " " +
                response.data[0].PROVINCE_NAME,
              dateCreate: response.data[0].lcp_dt_create,
              adminCreate: response.data[0].lcp_user_add,
              lcp_user_use: response.data[0].lcp_user_use,
              lcp_dt_use: response.data[0].lcp_dt_use,
            });
          }
        });
    } catch (error) {}
  }
  render() {
    return (
      <div className="content-detail">
        <Row>
          <Col
            className="col-detail-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <h1>ข้อมูล</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="col-detail-sup"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>ไอดี: {this.state.id}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>เลขทะเบียน: {this.state.number}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>เพิ่มเมื่อ: {this.state.dateCreate}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>ใช้เมื่อ: {this.state.lcp_dt_use}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>ผู้สร้าง: {this.state.adminCreate}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>ผู้ใช้: {this.state.lcp_user_add}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>สถานะ: {this.state.status}</h3>
              </Col>
            </Row>
            <Row className="row-detail-data">
              <Col
                className="col-detail-data"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h3>
                  รูป:
                  {/* {Object.entries(this.state.data).map(
                    ([key, value], index) => {
                      // function show picture
                      var valueImg = [];
                      if (key === "photo") {
                        valueImg = value;
                      }
                      let showImg = valueImg.map(function (value, index) {
                        return (
                          <img
                            style={{ width: 80, marginRight: 5 }}
                            key={index}
                            src={value}
                            alt={index}
                          />
                        );
                      });

                      return showImg;
                    }
                  )} */}
                </h3>
              </Col>
            </Row>

            <Row className="row-detail-Qrcode">
              {/* {this.state.data !== [] && this.state.data !== undefined ? (
                <Col
                  className="col-detail-QRcode"
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 16, offset: 4 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  <QRCode value={this.state.data.name} />
                  <h4>{this.state.data.address}</h4>
                </Col>
              ) : null} */}
            </Row>
            {/* <Row className="row-detail-btn">
              <Col
                className="col-detail-btn"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 8, offset: 8 }}
                xl={{ span: 8, offset: 8 }}
              >
                <Link to={{ pathname: "/edit", state: this.state.data }}>
                <Button className="btn-detail" >
                  <h4 className="text-btn-detail">แก้ไข</h4>
                </Button>
                </Link>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail;
