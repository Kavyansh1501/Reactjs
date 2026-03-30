import React,{useState} from 'react'
import { Dash } from './Dash';

export function Home () {
    const[Uname,setname]=useState("");
    const[password,setpassword]=useState("");
    const[data,setdata]=useState(false);

    const fun1=(e)=>{
        setname(e.target.value);
    }
    const fun2=(e)=>{
        setpassword(e.target.value);
    }

    

    const submit=()=>{
        if(Uname==="kavyansh" && password==="12345"){
            alert("login is successful");
            setdata(true);
        }
        else{
            alert("login failed");
        }
    }
  return (
    <div>
        {data?(<Dash/>):<>
        
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
            </>}
        </div>
  )
}