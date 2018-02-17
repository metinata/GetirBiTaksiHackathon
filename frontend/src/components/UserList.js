import React, { PureComponent } from 'react'
import { Table, Icon, Divider, Row, Col, Input, Button } from 'antd'

class UserList extends PureComponent {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'User',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => `${record.name} ${record.surname}`
            },
            {
                title: 'Location',
                dataIndex: 'city',
                key: 'city',
                render: (text, record) => text.name
            },
            {
                title: 'Destination',
                dataIndex: 'destination',
                key: 'destination',
                render: (text, record) => text.name
            },
            {
                title: 'ACTION',
                key: 'login',
                render: (text, record) => {
                    return <Button type="primary" onClick={this.props.login.bind(null, record._id)}>LOGIN</Button>
                }
            }
        ]
    }
    render() {
        return (
            <Row gutter={10}>
                <Col span={24}>
                    <Table columns={this.columns} dataSource={this.props.data} />
                </Col>
            </Row>
        )
    }
}

export default UserList
