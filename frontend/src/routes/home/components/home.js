import React, { PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Button, Icon } from 'antd'

class Home extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    
    }

    render() {
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        Hi!
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Home);