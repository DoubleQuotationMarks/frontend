import { Space, Button } from 'antd'

const Profit_Loss = ({ company, indicator, rate, stopProfit, stopLoss, setClickCheck, setClickCreate }) => {

    return(
        <div className='profit-loss'>
            <p>{company}</p>
            <p>{indicator}</p>
            <p>{rate}</p>
            <p>{stopProfit}</p>
            <p>{stopLoss}</p>
            <Button onClick={()=>{setClickCheck(false); setClickCreate(true);}}>回上頁</Button>
        </div>
    )
}

export default Profit_Loss