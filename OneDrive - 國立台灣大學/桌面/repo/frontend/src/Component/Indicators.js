import { Select } from 'antd';
import 'antd/dist/antd.css';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { Space } from 'antd';

const { Option } = Select;

const Indicators = ({ setIndicator, setClickCheck }) => {

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setIndicator(value)
        setClickCheck(false)
    }
      
    const onSearch = (val) => {
        console.log('search:', val);
    }
      
    return(
        <div>
            <Space className='indicators'>
                <h1>選擇指標</h1>
                <Select
                showSearch
                style={{ width: 200 }}
                defaultValue={"RSI"}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                >
                <Option value="RSI">RSI</Option>
                <Option value="MACD">MACD</Option>
                <Option value="KD">KD</Option>
                <Option value="三大法人買超">三大法人買超</Option>
                </Select>
            </Space>
        </div>
    );

}



export default Indicators
//const onChangeRate = (value) => {
//    console.log(`selected ${value}`);
//}
//<InputNumber min={0} max={100} defaultValue={3} onChange={onChangeRate} />