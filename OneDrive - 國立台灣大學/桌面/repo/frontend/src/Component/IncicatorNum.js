import { Select } from 'antd';
import 'antd/dist/antd.css';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { Space } from 'antd';

const IndicatorNum = ({ setRate, setClickCheck }) => {
    
      const onChange = (value) => {
        console.log(`selected ${value}`);
        setRate(value)
        setClickCheck(false)
      }
      
      return(
        <div>
            <InputNumber 
            min={0} 
            max={100} 
            defaultValue={3} 
            onChange={onChange} />            
        </div>
      );

}

export default IndicatorNum