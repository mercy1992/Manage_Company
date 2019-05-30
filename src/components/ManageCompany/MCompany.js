import React from "react";
import 'antd/dist/antd.css';
import { Table, Popconfirm, Icon, Col, Row } from "antd";
import Add from './Add'
import Edit from './Edit'
import More from './More'

class MCompany extends React.Component {
  state = {
    loading: false,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;

    const dataSource = [
      {
        key: "id",
        id: "C001",
        name: "Samuel Gnanam",
        abbreviation: "SGIC",
        period: "1Year",
        admin: "Mercy"
      },
      {
        key: "id",
        id: "C002",
        name: "Invicta Inovations",
        abbreviation: "Invicta",
        period: "1Year",
        admin: "Mercy"
      },

      {
        key: "id",
        id: "C003",
        name: "Sysco Labs",
        abbreviation: "Sysco",
        period: "1Year",
        admin: "Mercy"
      },

      {
        key: "id",
        id: "C004",
        name: "Mithra inovations",
        abbreviation: "mithra",
        period: "2Year",
        admin: "Mercy"
      }
    ];
    const columns = [
      {
        title: "Company ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Company Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Abbreviation",
        dataIndex: "abbreviation",
        key: "abbreviation"
      },
      {
        title: "Lisence period",
        dataIndex: "period",
        key: "period"
      },

      {
        title: "Company Admin",
        dataIndex: "admin",
        key: "admin"
      },
      {

        title: "Action",
        key: "action",

        render: () => (
          <Row>
            <Col span={12}>
              <Edit />
              
            </Col>
            <Col span={12}>
              <Popconfirm
                title="Are you sure, do you want delete this Company?"
                icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
              >
                <a href="hello" style={{ color: "red" }}>
                  <Icon type="delete" className="datatable-icon" />

                </a>
              </Popconfirm>
            </Col>
          </Row>

        )
      },

      {
        title: "More Details",
        dataIndex: "admin",
        render: () => (
          // <span>
          //   <a href="hello" style={{ color: "green" }}>
          //     <Icon type="fullscreen" className="datatable-icon" />

          //   </a>
          // </span>
          <Row>
          <Col>
           
            <More />
          </Col>
          </Row>
        )
      },
    ];

    return (

      <React.Fragment>
        <div style={{ padding: 4, background: "#fff", minHeight: 360 }}>
          <Add />
          <Table columns={columns} dataSource={dataSource} />

        </div>

      </React.Fragment>
    );
  }
}

export default MCompany;
