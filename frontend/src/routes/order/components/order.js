import React, { PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Icon, Steps, Button, message } from 'antd'
import { SelectCountry, SelectCity } from '../../../components'

const Step = Steps.Step;

const steps = [
    {
        title: 'Select Country'
    },
    {
        title: 'Select City'
    },
    {
        title: 'Select Product'
    }
];

class Order extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    componentDidMount() {
        this.props.getCountries();
        /*
        this.props.getCitiesByCountryId("5a884bfc44b1d45a04af13db", this.props.me.city._id);
        this.props.getAvailableUsers("5a884bfc44b1d45a04af13d8");
        this.props.getProductsByCityId("5a884bfc44b1d45a04af13d8");
        */
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.country && !nextProps.city){
            this.next();
        }
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
                                (() => {
                                    switch (this.state.current) {
                                        case 0:
                                            return (
                                                <SelectCountry city={this.props.me.city._id} getCities={this.props.getCitiesByCountryId} changeCountry={this.props.changeCountry} data={this.props.countries} />
                                            )
                                        case 1:
                                            return (
                                                <SelectCity changeCity={this.props.changeCity} data={this.props.cities} />
                                            )
                                        case 2:
                                            return (
                                                <div>Hiii333</div>
                                            )
                                    }
                                })()
                            }
                        </div>
                        <div className="steps-action">
                            {
                                this.state.current < steps.length - 1
                                &&
                                <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                this.state.current === steps.length - 1
                                &&
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            }
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Order);