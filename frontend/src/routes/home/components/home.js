import React, { PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Button, Icon } from 'antd'
import { UserList } from '../../../components'

class Home extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.me._id){
            this.props.history.push('/order');
        }
    }

    render() {
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        <UserList data={this.props.users} login={this.props.login} />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Home);