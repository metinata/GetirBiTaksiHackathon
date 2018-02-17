import React, { PureComponent } from 'react'
import { Table, Icon, Divider, Row, Col, Input, Button } from 'antd'

class SelectUser extends PureComponent {
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
                title: 'Quota',
                dataIndex: 'quota',
                key: 'quota'
            },
            {
                title: 'ACTION',
                key: 'login',
                render: (text, record) => {
                    return <Button type="primary">SELECT</Button>
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

export default SelectUser