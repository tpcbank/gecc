import { Col, Row } from "antd";
import React, { Component } from "react";
import QRCode from "qrcode.react";
import "./Print.css";

export class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: props.location.data,
    };
    console.log(props.location.data);
  }
  componentDidMount() {
    window.print();
  }
  render() {
    console.log(this.state.dataTable);

    return (
      <div>
        <Row>
          <Col
            className="test"
            // xs={{ span: 20, offset: 2 }}
            // sm={{ span: 16, offset: 4 }}
            // xl={{ span: 16, offset: 4 }}
          >
            <Row>
              {this.state.dataTable !== [] && this.state.dataTable !== undefined
                ? this.state.dataTable.map(function (data, index) {
                    console.log(data);
                    return (
                      <Col key={index} className="col-print">
                        <QRCode value={data.name} />
                        <h4>{data.name}</h4>
                      </Col>
                    );
                  })
                : null}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Print;
