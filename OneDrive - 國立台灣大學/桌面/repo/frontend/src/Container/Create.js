import Companies from '../Component/Company';
import Indicators from '../Component/Indicators';
import StopProfit from '../Component/StopProfit';
import StopLoss from '../Component/StopLoss';
import IndicatorNum from '../Component/IncicatorNum';
import { Space, Button } from 'antd'
import { useState } from 'react';

const Create = ({ setCompany, setIndicator, setRate, setStopProfit, setStopLoss, setClickCheck, setMenuset, setClickCreate }) => {

    return(
        <div className='create'>
            <Companies setCompany={setCompany} setClickCheck={setClickCheck} />
            <Indicators setIndicator={setIndicator} setClickCheck={setClickCheck} />
            <IndicatorNum setRate={setRate} setClickCheck={setClickCheck} />
            <StopProfit setStopProfit={setStopProfit} setClickCheck={setClickCheck} />
            <StopLoss setStopLoss={setStopLoss} setClickCheck={setClickCheck} />
            <Button onClick={()=>{setClickCheck(true); setClickCreate(false);}}>確定</Button>
            <Button onClick={()=>{setClickCheck(false); setMenuset(true); setClickCreate(false);}}>回上頁</Button>
        </div>
    )
}

export default Create
//