import {useState} from "react";
import Login from "./Login"
import SignUp from "./SignUp"
import "./style.css"

const RegistrationMain = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="registrationMain">
            {isLogin ? <Login setIsLogin = {setIsLogin}/> : <SignUp setIsLogin = {setIsLogin}/>}
            
            
        </div>
    );

}

export default RegistrationMain;