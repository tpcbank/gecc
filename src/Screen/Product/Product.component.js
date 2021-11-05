import { Col, Row, Table, Button, Input, Modal } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import axios from "axios";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      modalPhoto: [],
      name: "",
      phone: "",
      priceIn: "",
      priceOut: "",
      status: "",
      data: [],

      valueFilterName: "",
      valueFilterPhone: "",

      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      dataInTable: [],
      dataSource: [],
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
          const results = response.data.map((data, index) => ({
            key: index, // I added this line
            GEO_ID: data.GEO_ID,
            PROVINCE_CODE: data.PROVINCE_CODE,
            PROVINCE_ID: data.PROVINCE_ID,
            PROVINCE_NAME: data.PROVINCE_NAME,
            PROVINCE_NAME_ENG: data.PROVINCE_NAME_ENG,
            isOpen: data.isOpen,
            lcp_comment: data.lcp_comment,
            lcp_dt_create: data.lcp_dt_create,
            lcp_dt_use: data.lcp_dt_use,
            lcp_group: data.lcp_group,
            lcp_id: data.lcp_id,
            lcp_number: data.lcp_number,
            lcp_province: data.lcp_province,
            lcp_status: data.lcp_status,
            lcp_user_add: data.lcp_user_add,
            lcp_user_use: data.lcp_user_use,
            status: data.status,
          }));
          this.setState({
            data: results,
            dataSource: results,
          });
        });
    } catch (error) {}
  }

  // start select
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onSelectAll = (selected, selectedRows) => {
    this.setState({
      dataInTable: selectedRows,
    });
  };
  onSelect = (record, selected, selectedRows) => {
    console.log("selectedRows", selectedRows);
    this.setState({
      dataInTable: selectedRows,
    });
  };
  //  end select

  ShowModal = (photo) => {
    console.log(photo);
    // const idPhoto = photo;
    this.setState({
      visibleModal: true,
      modalPhoto:
        "https://gecc.dlt.go.th/2021-09-01/licenseplate/lib/img/" +
        photo +
        ".png",
    });
  };
  CloseModal = () => {
    this.setState({
      visibleModal: false,
    });
  };
  render() {
    console.log("dada", this.state.data);
    const columns = [
      {
        title: "เลขทะเบียน",
        dataIndex: "number",
        // specify the condition of filtering result
        // here is that finding the number started with `value`
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
        title: "รูป",
        dataIndex: "photo",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          // console.log(record.photo);
          return {
            children: (
              <div key={index}>
                <Col
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 20, offset: 2 }}
                  xl={{ span: 20, offset: 2 }}
                >
                  <Button
                    className="btn-product-printer"
                    onClick={() => this.ShowModal(record.lcp_id)}
                  >
                    <h4 className="text-btn-printer">รูป</h4>
                  </Button>
                </Col>
              </div>
            ),
            props: {
              "data-heading": "Photo",
            },
          };
        },
      },
      {
        title: "หมายเหตุ",
        dataIndex: "function",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => {
          return {
            children: (
              <div key={index} className="btn-wrap">
                <Link to={{ pathname: "/detail", state: record.lcp_id }}>
                  <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 20, offset: 2 }}
                    xl={{ span: 20, offset: 2 }}
                  >
                    <Button className="btn-product-printer">
                      <h4 className="text-btn-printer">ข้อมูลเพิ่มเติม</h4>
                    </Button>
                  </Col>
                </Link>
              </div>
            ),
            props: {
              "data-heading": "Function",
            },
          };
        },
      },
      {
        title: "เพิ่มเมื่อ",
        dataIndex: "dateAdd",
        // specify the condition of filtering result
        // here is that finding the number started with `value`
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
        title: "ผู้สร้าง",
        dataIndex: "adminCreate",
        // specify the condition of filtering result
        // here is that finding the number started with `value`
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
    ];

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
    };
    return (
      <div className="content-product">
        <Row>
          <Col
            className="col-product-top"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <h1 className="text-product-top">รายละเอียด</h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="col-product-sup"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <Row>
              {/* printer */}
              <Col
                className="col-product-printer"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 6, offset: 2 }}
                xl={{ span: 6, offset: 2 }}
              >
                <Link
                  to={{
                    pathname: "/print",
                    data: this.state.dataInTable,
                  }}
                >
                  <Button
                    className="btn-product-printer"
                    disabled={
                      this.state.dataInTable.length === 0 ? true : false
                    }
                  >
                    <h4 className="text-btn-printer">พิมพ์</h4>
                  </Button>
                </Link>
              </Col>
              {/* Search */}
              <Col
                className="col-product-printer"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 12, offset: 2 }}
                xl={{ span: 12, offset: 2 }}
              >
                <Input
                  placeholder="Search"
                  className="search-product"
                  value={this.state.valueFilterName}
                  onChange={(e) => {
                    const currValue = e.target.value;
                    this.setState({ valueFilterName: currValue });
                    const filteredData = this.state.data.filter(
                      (entry) =>
                        // console.log(entry.name)
                        entry.lcp_group.includes(currValue) ||
                        entry.lcp_number.includes(currValue) ||
                        entry.PROVINCE_NAME.includes(currValue)
                    );
                    this.setState({ dataSource: filteredData });
                  }}
                />
              </Col>
            </Row>
            {/* table */}
            <Row>
              <Col
                className="col-product-table"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Table
                  className="table"
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={this.state.dataSource}
                  bordered
                  rowClassName={(record) => {
                    if (record.key % 2 === 1) {
                      return "zebra-highlight";
                    }
                  }}
                />
              </Col>
            </Row>
            <Modal
              visible={this.state.visibleModal}
              footer={null}
              onCancel={() => this.CloseModal()}
            >
              <Row justify="center">
                <Col> รูป</Col>
              </Row>
              <Row>
                <Col
                  xs={{ span: 20, offset: 2 }}
                  sm={{ span: 20, offset: 2 }}
                  xl={{ span: 20, offset: 2 }}
                >
                  {/* {this.state.modalPhoto.map(function (data, index) {
                    console.log(data);
                    return ( */}
                  <img width={"100%"} src={this.state.modalPhoto} alt=" " />
                  {/* ); */}
                  {/* })} */}
                </Col>
              </Row>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
