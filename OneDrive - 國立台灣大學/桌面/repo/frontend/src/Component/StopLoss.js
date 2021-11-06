import { Select } from 'antd';
import 'antd/dist/antd.css';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { Space } from 'antd';

const StopLoss = ({ setStopLoss, setClickCheck }) => {
    
      const onChange = (value) => {
        console.log(`selected ${value}`);
        setStopLoss(value)
        setClickCheck(false)
      }
      
      return(
        <div>
            <Space className='stopLoss'>
                <h1>停損點</h1>
                <InputNumber 
                min={0} 
                max={100} 
                defaultValue={3} 
                onChange={onChange} />
                <p>%</p>
            </Space>
        </div>
      );

}

export default StopLoss