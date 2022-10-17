import { Button, Dialog ,TextField,Avatar} from "@mui/material";
import './Login.css'
import react, { useState } from "react";
import axios from "axios";
const Login = () => {
    const [dialogBox, setDialogBox] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginApi = (res) => {
        let item = { email, password };
        axios.post('https://reqres.in/api/login', item)
            .then((res) => {
                alert("Welcome")
                console.log('this is then ::==> ', res)
            }).catch(() => {
                console.log("this is catch ::==>", res)
                alert('wrong email password')
            })
            setDialogBox(false)
    };
    const handleClick = () => {
        setDialogBox(true)
    }


    return (
        <>
            <Button onClick={() => handleClick()} variant='outlined'>login</Button>
            <div>
            <Dialog open={dialogBox}>
                <div className='main_container'>
                    <div className="side_image">
                        <div className="side_login_heading">
                        <h2> Login </h2>
                        <p>Get access to your Orders,</p>
                        <p>Wishlist and Recommendations</p>
                        </div>
                    <img className="login_side_image" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="my pic" />
                    </div>
                <div className='center'>
                        <div className="inputs">
                            <TextField name='email' type='email'
                                onChange={(e) => setEmail(e.target.value)} className='input' id="UserNameInput" label="User Name" variant="standard" />
                            <TextField name='password' type='password'
                                onChange={(e) => setPassword(e.target.value)} className='input' id="PasswordInput" label="Password" variant="standard" />
                        </div>
                        <Button
                            className='login_button'
                            onClick={()=>loginApi()}
                            disabled={!email || !password} variant="contained" >
                            Login
                        </Button>

                        {/* "email": "eve.holt@reqres.in",
                        "password": "pistol" */}
                    
                    </div>
                </div>
            </Dialog>
            </div>
        </>
    )
}
export default Login;