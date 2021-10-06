import { Col, Row, Table, Button, Input } from "antd";
import React, { Component } from "react";
import "./Report.css";

const data = [
  {
    name: "John Brown",
    count: "12345679",
    date: "25/02/2021",
  },
  {
    name: "Jim Green",
    count: "22345",
    date: "25/02/2021",
  },
  {
    name: "Joe Black",
    count: "1123",
    date: "25/02/2021",
  },
  {
    name: "Jim Red",
    count: "122",
    date: "25/02/2021",
  },
];
export class Report extends Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.name.length - b.name.length,
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "Count",
        dataIndex: "count",
        sorter: (a, b) => a.count - b.count,
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "Date",
        dataIndex: "date",
        responsive: ["xl", "sm", "xs"],
      },
    ];
    return (
      <div className="content-report">
        <Row>
          <Col
            className="col-report-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <h1>Report</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="col-report-bottom"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <Row>
              <Col
                className="col-report-export"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Button>asd</Button>
              </Col>
            </Row>
            <Row>
              <Col
                className="col-report-table"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Table
                  scroll={{ x: 1000 }}
                  columns={columns}
                  dataSource={data}
                  bordered
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Report;
