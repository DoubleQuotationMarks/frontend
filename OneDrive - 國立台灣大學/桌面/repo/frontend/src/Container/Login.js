import '../App.css'
import { Space, Button } from 'antd'

const Login = ( { setUserID, setPassword, setLogin, setRegister } ) => {

    return (
        <div className='header'>
            <h1>登入與註冊</h1>
            <Space className='menu-set'>
                <User setUserID={setUserID} setPassword={setPassword} />
                <Button onClick={()=>{setLogin(false); }}>登入</Button>
                <Button onClick={()=>{setRegister(true); }}>註冊</Button>
            </Space>
        </div>
    )

}

export default Login