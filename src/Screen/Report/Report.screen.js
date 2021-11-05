import { Col, Row, Table, Button } from "antd";
import React, { Component } from "react";
import "./Report.css";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../fonts/THSarabun-normal";
import axios from "axios";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    try {
      axios
        .get(
          "https://gecc.dlt.go.th/2021-09-01/licenseplate/lib/datareturn.php?i=6",
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.setState({
            data: response.data,
          });
        });
    } catch (error) {}
  }
  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.addFont("THSarabun-normal.ttf", "THSarabun", "bold");
    doc.setFont("THSarabun");
    doc.setFontSize(30);

    const title = "My Awesome Report";
    const headers = [["NAME", "Count", "Date"]];

    const dataTable = this.state.data.map((elt) => [
      elt.name,
      elt.count,
      elt.date,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: dataTable,
      // headerStyles: { font: "THSarabun", fontSize: 17 },
      bodyStyles: { font: "THSarabun", fontSize: 15 },
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  render() {
    const columns = [
      {
        title: "เลขทะเบียน",
        dataIndex: "number",
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.number.length - b.number.length,
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children:
              record.lcp_group +
              " " +
              record.lcp_number +
              " " +
              record.PROVINCE_NAME,
            props: {
              "data-heading": "number",
            },
          };
        },
      },
      {
        title: "เพิ่มเมื่อ",
        dataIndex: "dateAdd",
        // specify the condition of filtering result
        // here is that finding the number started with `value`
        sorter: (a, b) => a.dateAdd.length - b.dateAdd.length,
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children: record.lcp_dt_create,
            props: {
              "data-heading": "dateAdd",
            },
          };
        },
      },
      {
        title: "ใช้เมื่อ",
        dataIndex: "lcp_dt_use",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children: record.lcp_dt_use,
            props: {
              "data-heading": "lcp_dt_use",
            },
          };
        },
      },

      {
        title: "ผู้สร้าง",
        dataIndex: "adminCreate",
        // specify the condition of filtering result
        // here is that finding the number started with `value`
        sorter: (a, b) => a.adminCreate.length - b.adminCreate.length,
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children: record.lcp_user_add,
            props: {
              "data-heading": "adminCreate",
            },
          };
        },
      },
      {
        title: "ผู้ใช้",
        dataIndex: "lcp_user_add",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children: record.lcp_user_use,
            props: {
              "data-heading": "lcp_user_add",
            },
          };
        },
      },
      {
        title: "สถานะ",
        dataIndex: "status",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children:
              record.lcp_status === "1"
                ? "รอใช้งาน"
                : record.lcp_status === "2"
                ? "สำเร็จ"
                : "ยกเลิก",
            props: {
              "data-heading": "status",
            },
          };
        },
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
            <h1 className="report-top-text">รายงาน</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="col-report-bottom"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <Row className="row-report-export">
              <Col
                className="col-report-export"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 8, offset: 4 }}
                xl={{ span: 8, offset: 4 }}
              >
                <Button className="btn-export">
                  <CSVLink
                    className="CSV-export"
                    filename={"Expense_Table.csv"}
                    data={this.state.data}
                  >
                    <h4 className="text-export">Export to CSV</h4>
                  </CSVLink>
                </Button>
              </Col>
              {/* <Col
                className="col-report-export"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                <Button className="btn-export" onClick={this.exportPDF}>
                  <h4 className="text-export">Export to PDF</h4>
                </Button>
              </Col> */}
            </Row>
            <Row>
              <Col
                className="col-report-table"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Table
                  columns={columns}
                  dataSource={this.state.data}
                  bordered
                  rowClassName={(record) => {
                    if (record.key % 2 === 1) {
                      return "zebra-highlight";
                    }
                  }}
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
