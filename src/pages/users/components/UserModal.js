import { Form, Input, Modal } from 'antd';

import React from 'react';

// make this class as its not just a pure component

const FormItem = Form.Item;
class UserEditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModelHandler = () => {
        this.setState({
            visible:true
        });
    }

    handleOk = (e) => {
        this.setState({
          visible: false,
        });
      }
    
    handleCancel = (e) => {
        this.setState({
          visible: false,
        });
    }

    render() {

        const { children, title } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { name, email, website } = this.props.record;
        const formItemLayout = {
                labelCol: { span: 6 },
                wrapperCol: { span: 14 },
        };

        return (
            <span>
                <span onClick={this.showModelHandler}>
                { children }
                </span>
                <Modal title={title} visible={this.state.visible}  onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form horizontal onSubmit={this.okHandler}>
                        <FormItem
                            {...formItemLayout}
                            label="Name"
                            >
                            {
                                getFieldDecorator('name', {
                                initialValue: name,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Email"
                            >
                            {
                                getFieldDecorator('email', {
                                initialValue: email,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Website"
                            >
                            {
                                getFieldDecorator('website', {
                                initialValue: website,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
            
        )
    }
}


export default Form.create()(UserEditModal);