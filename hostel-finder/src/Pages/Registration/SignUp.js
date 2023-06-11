import {useState} from "react";

const SignUp = ({ setIsLogin}) => {

    const [form, setForm] = useState({
        "fullName": "",
        "email": "",
        "password": ""
    });

    const handleForm = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/user", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if(data.length <= 0)
        {
            const response = await fetch("http://localhost:8080/demo", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            }); 

            const newData = await response.json();
            console.log(newData)
        }
        else
        {
            console.log("already a member");
        }
    } 

    // const getUser = async () =>{
    //     const response = await fetch("http://localhost:8080/demo", {
    //         method: "GET",
    //     });

    //     const data = await response.json();
    //     console.log(data);
    // }

    // useEffect(() =>{
    //     getUser();
    // },[]);

    return (
        <div className="login">
            <p>{JSON.stringify(form)}</p>
            <form className="loginCont" onSubmit = {handleSubmit}>
                <h1>Register</h1>
                <input type="text" placeholder="Full Name" name = "fullName" onChange = {handleForm} / >
                
                <input type="email" placeholder="your@email.com" name="email" onChange={handleForm}  />
                
                <input type="password" placeholder="password" name="password" onChange={handleForm}  />
                <button>SignUp</button>
                <p>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span> </p>
            </form>
        </div>
    );
}

export default SignUp;