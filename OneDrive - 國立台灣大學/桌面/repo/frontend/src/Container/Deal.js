import { Space, Button } from 'antd'
import { useState } from 'react';

const Deal = ({ setMenuset,  setClickDeal }) => {

    return(
        <div className='schedule'>
            <div>
                台積電
                半導體類股
            </div>
            <div>
                EPS
            </div>
            <Button onClick={()=>{setMenuset(true); setClickDeal(false);}}>回上頁</Button>
        </div>
    )
}

export default Deal