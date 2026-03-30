import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export function Login () {
    const[Uname,setname]=useState("");
    const[password,setpassword]=useState("");

    const fun1=(e)=>{
        setname(e.target.value);
    }
    const fun2=(e)=>{
        setpassword(e.target.value);
    }

    const navigate = useNavigate();

    const submit=()=>{
        if(Uname==="kavyansh" && password==="12345"){
            alert("login is successful");
            localStorage.setItem("isLoggedIn","True");
            localStorage.setItem("username",Uname);
            navigate("/dashboard");
        }
        else{
            alert("login failed");
        }
    }
    useEffect(()=>{
      const isLoggedIn=localStorage.getItem("isLoggedIn");
      if(isLoggedIn==="True"){
        navigate("/dashboard");
      }
    },[]);

  return (
    <div className="login-container">
        <div className="login-card">
            <h1 className="login-title">Login</h1>

            <input 
              className="login-input"
              type="text" 
              placeholder='Enter Username' 
              value={Uname} 
              onChange={fun1}
            />

            <input 
              className="login-input"
              type='password' 
              placeholder="Enter Password"
              value={password} 
              onChange={fun2}
            />

            <button className="login-btn" onClick={submit}>
              Login
            </button>
        </div>
    </div>
  )
}