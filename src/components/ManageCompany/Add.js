import React from "react";
import { Button, Modal, Form, Input, DatePicker, Select,Icon } from "antd";
import { Row, Col } from "antd";
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const Option = Select.Option;
      function onChange(value) {
        console.log(`selected ${value}`);
      }

      function onBlur() {
        console.log("blur");
      }

      function onFocus() {
        console.log("focus");
      }

      function onSearch(val) {
        console.log("search:", val);
      }
      return (
        <Modal
          visible={visible}
          title="ADD COMPANY"
          okText="Save"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Row gutter="18">
              <Col span={12}>
                <Form.Item label="Company Name">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        message: "Please input the title of collection!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Abberivation:">
                  {getFieldDecorator("title1", {
                    rules: [
                      {
                        message: "Please input the title of collection!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter="18">
              <Col span={12}>
                <Form.Item label="IT Incharge :">
                  {getFieldDecorator("title2", {
                    rules: [
                      {
                        message: "Please input the Name"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Row gutter="18">
                <Col span={12}>
                  <Form.Item label="Lisence Period:">
                    <Select
                      showSearch
                      style={{ width: 225 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="6 Month">6 Month</Option>
                      <Option value="1 Year">1 Year</Option>
                      <Option value="2 Year">2 Year</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Col span={12}>
                <Form.Item label="Email:">
                  {getFieldDecorator("title5", {
                    rules: [
                      {
                        message: "Please input the title of collection!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Row gutter="18">
                <Col span={6}>
                  <Form.Item label="Start Date">
                    {getFieldDecorator("date-picker")(<DatePicker />)}
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item label="End  Date">
                    {getFieldDecorator("date-picker")(<DatePicker />)}
                  </Form.Item>
                </Col>
              </Row>
            </Row>
          </Form>
        </Modal>
      );
    }
  }
);

class Add extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
            <Icon type="diff" theme="filled" />
            Add New 
          </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default Add;