import React, { PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Icon, Steps, Button, message } from 'antd'

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="steps products">
                <Row gutter={16}>
                    {
                        this.props.data.map((product, index) => {
                            return <Col key={index} span={4}>{product.name}</Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default ProductList