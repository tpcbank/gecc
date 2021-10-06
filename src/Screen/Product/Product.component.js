import { Col, Row, Table, Button, Input } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const data = [
  {
    key: "1",
    name: "John Brown",
    Phone: "12345679",
    PriceIn: 2500,
    PriceOut: 3000,
  },
  {
    key: "2",
    name: "Jim Green",
    Phone: "22345",
    PriceIn: 7000,
    PriceOut: 14000,
  },
  {
    key: "3",
    name: "Joe Black",
    Phone: "1123",
    PriceIn: 6000,
    PriceOut: 12000,
  },
  {
    key: "4",
    name: "Jim Red",
    Phone: "122",
    PriceIn: 3000,
    PriceOut: 4500,
  },
];

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      name: "",
      phone: "",
      priceIn: "",
      priceOut: "",
      status: "",

      valueFilterName: "",
      valueFilterPhone: "",

      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      dataInTable: [],
      dataSource: data,
    };
  }

  // start select
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };
  onSelectAll = (selected, selectedRows) => {
    this.setState({
      dataInTable: selectedRows,
    });
  };
  onSelect = (record, selected, selectedRows) => {
    this.setState({
      dataInTable: selectedRows,
    });
  };
  //  end select

  // start FilterInput
  FilterByNameInput = () => (
    <Row>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        xl={{ span: 20, offset: 2 }}
      >
        <Input
          placeholder="Search Name"
          value={this.state.valueFilterName}
          onChange={(e) => {
            const currValue = e.target.value;
            this.setState({ valueFilterName: currValue });
            const filteredData = data.filter((entry) =>
              // console.log(entry.name)
              entry.name.includes(currValue)
            );
            this.setState({ dataSource: filteredData });
          }}
        />
      </Col>
    </Row>
  );
  FilterByPhoneInput = () => (
    <Row>
      <Col>
        <Input
          placeholder="Search Phone"
          value={this.state.valueFilterPhone}
          onChange={(e) => {
            const currValue = e.target.value;
            this.setState({ valueFilterPhone: currValue });
            const filteredData = data.filter((entry) =>
              // console.log(entry.name)
              entry.Phone.includes(currValue)
            );
            this.setState({ dataSource: filteredData });
          }}
        />
      </Col>
    </Row>
  );
  // end FilterInput

  render() {
    console.log("data table ", this.state.dataInTable.length);
    const columns = [
      {
        title: ["Name", this.FilterByNameInput()],
        dataIndex: "name",
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.name.length - b.name.length,
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: ["Phone", this.FilterByPhoneInput()],
        dataIndex: "Phone",
        defaultSortOrder: "descend",
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "PriceIn",
        dataIndex: "PriceIn",
        sorter: (a, b) => a.PriceIn - b.PriceIn,
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "PriceOut",
        dataIndex: "PriceOut",
        sorter: (a, b) => a.PriceOut - b.PriceOut,
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "photo",
        dataIndex: "photo",
        responsive: ["xl", "sm", "xs"],
      },
      {
        title: "Function",
        dataIndex: "function",
        responsive: ["xl", "sm", "xs"],
        render: (text, record, index) => (
          <div className="btn-wrap">
            <Link to={{ pathname: "/detail", state: record }}>
              <Button
                onClick={(e) => {
                  console.log("corresponding email is :", record);
                }}
              >
                ข้อมูลเพิ่มเติม
              </Button>
            </Link>
          </div>
        ),
      },
    ];

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
      // renderCell: this.onRenderCell,
    };
    return (
      <div className="content-product">
        <Row>
          <Col
            className="col-product"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
          >
            <Row>
              <Col
                className="col-product-printer"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Link
                  to={{
                    pathname: "/print",
                    data: this.state.dataInTable,
                  }}
                >
                  <Button
                    disabled={
                      this.state.dataInTable.length === 0 ? true : false
                    }
                  >
                    พิมพ์
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col
                className="col-product-table"
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}
              >
                <Table
                  scroll={{ x: 1000 }}
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={this.state.dataSource}
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

export default Product;
