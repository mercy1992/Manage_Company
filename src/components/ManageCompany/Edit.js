import React from "react";
import {  Modal, Form, Input, DatePicker, Select ,Icon} from "antd";
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
          title="EDIT COMPANY"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
          width="50%"
        >
          <Form layout="vertical">
            <Row gutter={18}>
              <Col span={12}>
                <Form.Item
                  label="Company Name"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        message: "Please input!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Abberivation"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        message: "Please input!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="IT Incharge"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        message: "Please input!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Lisence Period"
                  hasFeedback
                  validateStatus="validating"
                >
                  <Select
                    showSearch
                    style={{ width: 310 }}
                    placeholder="Select a period"
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
                    <Option value="jack">1 month</Option>
                    <Option value="lucy">2 months</Option>
                    <Option value="tom">3 months</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        message: "Please input!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Start Date"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("date-picker")(<DatePicker />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="End Date"
                  hasFeedback
                  validateStatus="validating"
                >
                  {getFieldDecorator("date-picker")(<DatePicker />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      );
    }
  }
);

class Edit extends React.Component {
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
          
          <Icon type="edit" onClick={this.showModal} theme="twoTone" />
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
export default Edit;