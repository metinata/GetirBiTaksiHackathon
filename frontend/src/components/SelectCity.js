import React, { PureComponent } from 'react'
import { Select } from 'antd'

const Option = Select.Option

class SelectCity extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.props.changeCity(value);
    }
    render() {
        return (
            <div className="steps">
                <Select defaultValue="Please Select" style={{ width: '100%' }} onChange={this.handleChange}>
                    {
                        this.props.data.map((item, index) => {
                            return <Option key={index} value={item._id}>{item.name}</Option>
                        })
                    }
                </Select>
            </div>
        )
    }
}

export default SelectCity