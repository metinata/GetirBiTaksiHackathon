import React, { PureComponent } from 'react'
import { Divider, Progress, Table, Form, Row, Col, Input, Icon, Steps, Button, message } from 'antd'
import { SelectCountry, SelectCity, ProductList, SelectUser } from '../../../components'

const Step = Steps.Step;

const steps = [
    {
        title: 'Select Country'
    },
    {
        title: 'Select City'
    },
    {
        title: 'Select User'
    },
    {
        title: 'Select Product'
    }
];

class Order extends PureComponent {
    constructor(props) {
        super(props);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.selectUser = this.selectUser.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.state = {
            current: 0,
            quota: 0,
            currentQuota: 0,
            basket: [],
            rate: 0
        };
    }

    addToBasket(product, quantity) {
        let afterQuota = (product.weight * quantity) + this.state.currentQuota;

        if (afterQuota > this.state.quota) {
            message.warning('Insufficient quota limit');
            return;
        }
        let rate = Math.floor(afterQuota / (this.state.quota / 100));

        let p = {
            product: product,
            quantity: quantity
        };

        let basket = this.state.basket.splice();
        
        basket.push(p);
        
        this.setState({
            currentQuota: afterQuota,
            rate: rate,
            basket: basket
        }, () => {
            message.success(`${quantity} ${product.name} added to your basket`);
        });
    }

    next(quota) {
        const current = this.state.current + 1;
        this.setState({ current: current, quota: quota ? quota : 0 });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current: current, quota: 0, basket: [], currentQuota: 0, rate: 0 });
    }

    componentDidMount() {
        if (!this.props.me._id) {
            this.props.history.push('/');
            return;
        }
        this.props.getCountries();
    }

    changeCountry(countryId) {
        this.props.getCitiesByCountryId(countryId, this.props.me.city._id)
            .then(() => {
                this.next();
            });
    }

    changeCity(location) {
        this.props.getAvailableUsers(location, this.props.me.city._id)
            .then(() => {
                this.next();
            });
    }

    selectUser(cityId, quota = 0) {
        this.props.getProductsByCityId(cityId)
            .then(() => {
                this.next(quota);
            });
    }

    render() {
        const { current } = this.state;
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">
                            {
                                this.state.quota > 0 ? (
                                    <div className="progressbar">
                                        <Divider>{this.state.currentQuota} of {this.state.quota}</Divider>
                                        <Progress percent={this.state.rate} status="active" />
                                    </div>
                                ) : null
                            }
                            {
                                (() => {
                                    switch (this.state.current) {
                                        case 0:
                                            return (
                                                <SelectCountry change={this.changeCountry} data={this.props.countries} />
                                            )
                                        case 1:
                                            return (
                                                <SelectCity changeCity={this.changeCity} data={this.props.cities} />
                                            )
                                        case 2:
                                            return (
                                                <SelectUser selectUser={this.selectUser} data={this.props.availableUsers} />
                                            )
                                        case 3:
                                            return (
                                                <ProductList addToBasket={this.addToBasket} data={this.props.products} />
                                            )
                                    }
                                })()
                            }
                        </div>
                        <div className="steps-action">
                            {
                                this.state.current > 0
                                &&
                                <Button onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            }
                            {
                                this.state.current === steps.length - 1
                                &&
                                <Button type="primary" style={{float: 'right'}} onClick={() => message.success('Order completed!')}>Checkout</Button>
                            }
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Order);