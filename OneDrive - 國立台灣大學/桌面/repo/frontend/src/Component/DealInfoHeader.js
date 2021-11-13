import { Space } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons';


const DealInfoHeader = ({ company }) => {
    return(
        <div className='DealInfoHeader'>
            <space className='DealInfoHeader'>
                <h3>{company}</h3>            
                <h3>EPS</h3>
                <h3>本益比</h3>
                <h3>現金殖利率</h3>
            </space>
        </div>
    )
}

export default DealInfoHeader