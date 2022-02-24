import React from "react";
import 'antd/dist/antd.css';
import "./Form.css"

import { DatePicker, Button, Rate } from 'antd';
import { InputArea, SelectionPart, FormWrapper } from "./Form.styles";

import { FlagOutlined } from '@ant-design/icons';

const desc = ['no priority', 'low priority', 'normal', 'priority', 'high priority'];

function onChange(date, dateString) {
    console.log(date, dateString);
}

class Form extends React.Component {
    state = {
        value: 1,
    };

    handleChange = value => {
        this.setState({ value });
        console.log("Rate number: " + value);
    };
    render() {
        const { value } = this.state;
        return (
            <FormWrapper>
                <InputArea type="text" name="name" placeholder="Add your item and click 'Add' button" />
                <SelectionPart>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} defaultValue={1} character={<FlagOutlined />} />
                    <DatePicker bordered={true} onChange={onChange} />
                    <Button type="submit">Add</Button>
                </SelectionPart>
            </FormWrapper>
        );
    }
}

export default Form;
