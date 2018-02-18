import React, { PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Button, Icon, List } from 'antd'

class Admin extends PureComponent {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Supplier',
                dataIndex: 'supplier',
                key: 'supplier',
                render: (text, record) => `${text.name} ${text.surname}`
            },
            {
                title: 'Location',
                dataIndex: 'locationFrom',
                key: 'locationFrom',
                render: (text, record) => text.name
            },
            {
                title: 'Destination',
                dataIndex: 'locationTo',
                key: 'locationTo',
                render: (text, record) => text.name
            },
            {
                title: 'Owner',
                dataIndex: 'owner',
                key: 'owner',
                render: (text, record) => `${text.name} ${text.surname}`
            },
            {
                title: 'Products',
                dataIndex: 'items',
                key: 'items',
                render: (text, record) => {
                    console.log(text);
                    return <List
                        size="small"
                        // header={<div>Header</div>}
                        // footer={<div>Footer</div>}
                        bordered={false}
                        dataSource={text}
                        renderItem={item => (<List.Item>{item.quantity} X {item.product.name}</List.Item>)}
                    />
                }
            }
        ]
    }

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        <Table columns={this.columns} dataSource={this.props.orders} />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Admin);