import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export function Login () {
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");

    const fun1=(e)=>{
        setname(e.target.value);
    }
      const fun2=(e)=>{
        setpassword(e.target.value);
    }
    const navigate = useNavigate();
    const submit=()=>{
        if(name==="kavyansh" && password==="12345"){
            alert("login is succesful");
            navigate("/dashboard")
        }
        else{
            alert("login failed");
        }
    }

  return (
    <div>
        <h1>login page</h1>
        <input type="text" placeholder='name' value={name} onChange={fun1}/>
        <input type='password' value={password} onChange={fun2}/>
        <button onClick={submit}>submit</button>
    </div>
  )
}
