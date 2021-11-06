import './App.css';
import MenuSet from './Container/MenuSet'
import Create from './Container/Create'
import Profit_Loss from './Container/Profit_Loss'
import Deal from './Container/Deal'
import { useState } from 'react';

const App = () => {

  const [company, setCompany] = useState('台積電')
  const [indicator, setIndicator] = useState('RSI')
  const [rate, setRate] = useState(3)
  const [stopProfit, setStopProfit] = useState(3)
  const [stopLoss, setStopLoss] = useState(3)
  const [menuset, setMenuset] = useState(true)
  const [clickDeal, setClickDeal] = useState(false)
  const [clickCreate, setClickCreate] = useState(false)
  const [clickCheck, setClickCheck] = useState(false)

  return <>
    {menuset?<MenuSet setClickDeal={setClickDeal} setClickCreate={setClickCreate} setMenuset={setMenuset} />:<></>}
    {clickCreate?
    <Create setCompany={setCompany}
            setIndicator={setIndicator} 
            setRate={setRate} 
            setStopProfit={setStopProfit}
            setStopLoss={setStopLoss}
            setClickCheck={setClickCheck}
            setMenuset={setMenuset} 
            setClickCreate={setClickCreate} />: <></>}
    {clickCheck?
    <Profit_Loss company={company}
                 indicator={indicator}
                 rate={rate}
                 stopProfit={stopProfit}
                 stopLoss={stopLoss} 
                 setClickCheck={setClickCheck}
                 setClickCreate={setClickCreate} />:<></>}
    {clickDeal?
    <Deal setMenuset={setMenuset}
          setClickDeal={setClickDeal} />:<></>}
  </>
}

export default App;
