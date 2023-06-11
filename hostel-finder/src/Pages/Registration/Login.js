import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Login = ({setIsLogin}) =>{

    const navigate = useNavigate();

    const [form, setForm] = useState({
        "email": "",
        "password": ""
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        // console.log(data);

        if (data.length > 0)
        {
            console.log("login Success");
            navigate("/main",{replace:false,state:{name:"pande"}});
        }
        else 
        {
            console.log("Login failed");
        }
    } 

    const getData = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/demo", {
            method: "GET"
        });

        const data  = await response.json();
        console.log(data);
    }


    return(
        <div className="login">
            <form className="loginCont" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input  onChange = {handleForm} name = "email" type="email" placeholder="your@email.com" />
                <input  onChange = {handleForm} name = "password" type="password" placeholder="password" />
                <button>Login</button>
                <p>Don't have an account yet? <span onClick = {() => setIsLogin(false)}>Register Now</span> </p>
            </form>
            <button onClick = {getData}>Get</button>
        </div>
    );
}

export default Login;