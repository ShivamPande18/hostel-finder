import "./style.css"
import NavBar from "../Main/NavBar"
import { useState } from 'react';

const AddMain = () => {

    const [imageData, setImageData] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = {
            "fullName": title,
            "email": desc,
            "password": price
        };
        const response = await fetch("http://localhost:8080/demo",{
            method: "POST",
            body: JSON.stringify(form),
            headers:{
                "Content-Type": "application/json"
            }
        })
        
        const data = await response.json();
        console.log(data);
    }

    const getUsers = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:8080/demo", {
            method: "GET",
        })

        const data = await response.json();
        console.log(data[2]);
    }

    const getImg = async(e) =>{
        const file = (e.target.files[0]);
        const base64 = await convertTobase64(file);
        setImageData(base64);

    }

    function convertTobase64(file){
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) =>{
                reject(error);
            }
        })
    }

    return(
        <div className="addMain">
            {/* <NavBar/> */}
            <div className="left">
                <form>
                <h1>Manage your real estate bussiness with us!</h1>
                    <input
                        className="formElement"
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="formElement"
                        rows="5"
                        cols="30"
                        placeholder="Description"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <input
                        className="formElement"
                        type="number"
                        placeholder="$$$"
                        onChange={(e) => setPrice(e.target.value)}

                    />

                    <input
                        type="file"
                        className="formAddImg"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={getImg}
                    /> 

                    <button
                        className="formSubmit"
                        onClick={handleSubmit}
                    >Submit</button>

                    {/* <button
                        className="formElement formSubmit"
                        onClick={getUsers}
                    >Get</button> */}

                </form>

            </div>
            <div className="right">
                <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/demo2.jpg")} alt=""/>
            </div>
            
        </div>
    )
}

export default AddMain;