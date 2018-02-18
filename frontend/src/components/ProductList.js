import React, { PureComponent } from 'react'
import { Tag, List, Card, Table, Form, Row, Col, Input, InputNumber, Button, message } from 'antd'

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quantity: []
        };
        this.addToBasket = this.addToBasket.bind(this);
        this.productCountChange = this.productCountChange.bind(this);
    }
    productCountChange(id, value) {
        let quantityArray = this.state.quantity;
        let index = quantityArray.findIndex((a) => a.product == id)
        if(index >= 0){
            quantityArray[index].quantity = value;
        }
        else{
            let product = {
                product: id,
                quantity: value
            };
            quantityArray.push(product);
        }
        this.setState({ quantity: quantityArray })
    }
    addToBasket(product) {
        let index = this.state.quantity.findIndex((x) => x.product == product._id);
        let quantity = index >= 0 ? this.state.quantity[index].quantity : 1
        this.props.addToBasket(product, quantity);
    }
    render() {
        return (
            <div className="steps products list">
                <Row gutter={16}>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={this.props.data}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.name}>
                                    <InputNumber style={{ width: '100%' }} min={1} max={5} defaultValue={1} onChange={(value) => this.productCountChange(item._id, value)} />
                                    <Button onClick={this.addToBasket.bind(null, item)} type="primary" style={{ width: '100%', marginTop: 10 }}>Add to Basket</Button>
                                    <Tag style={{ width: '100%', marginTop: 10 }} color="blue">{item.weight} gr.</Tag>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Row>
            </div>
        )
    }
}

export default ProductList