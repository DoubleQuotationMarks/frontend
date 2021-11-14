import '../App.css'
import { Space, Button } from 'antd'
import { useState } from 'react'
import { Register } from "../Component/Register";

const Register_Succeed = ( { userID, password, setRegister, setMenuset } ) => {

    const [registerStr, setRegisterStr] = useState('')

    return (
        <div className='header'>
            <Register userID={userID} password={password} setRegisterStr={setRegisterStr} />
            {registerStr == '帳號註冊成功'?
            <Button onClick={()=>{setRegister(false); setMenuset(true);}}>註冊成功，進入主頁面</Button>:
            <Button onClick={()=>{setRegister(false); setLR(true);}}>註冊失敗，返回註冊頁</Button>}
        </div>
    )

}

export default Register_Succeed