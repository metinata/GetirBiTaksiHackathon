import React, { PureComponent } from 'react'
import { Table, Icon, Divider, Row, Col, Input, Button } from 'antd'

class SelectUser extends PureComponent {
    constructor(props) {
        super(props);
        this.userSelect = this.userSelect.bind(this);
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
                    return <Button type="primary" onClick={this.userSelect.bind(null, record.city._id, record.quota)}>SELECT</Button>
                }
            }
        ]
    }
    userSelect(cityId, quota) {
        this.props.selectUser(cityId, quota);
    }
    render() {
        return (
            <div className="steps">
                <Row gutter={10}>
                    <Col span={24}>
                        <Table columns={this.columns} dataSource={this.props.data} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SelectUser