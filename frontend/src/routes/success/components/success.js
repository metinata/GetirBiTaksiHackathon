import React, { PureComponent } from 'react'
import { Alert, Table, Form, Row, Col, Input, Button, Icon } from 'antd'

class Success extends PureComponent {
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
                        <Alert
                            message="Operation Completed"
                            description="Your order is successfully created!"
                            type="success"
                            showIcon
                        />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Success);