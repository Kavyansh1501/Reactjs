import React,{useState} from "react";
function Destructure(){
    const[user,setuser]=useState({});

    const handelchange=(e)=>{
        const{name,value}=e.target;
        setuser({...user,[name]:value});
    };
    return(
        <div>
            <input type="text" name="name" onChange={handelchange}/>
             <input type="text" name="email" onChange={handelchange}/>
            
            <h3>output</h3>
            <p>Name:{user.name}</p>
           <p> Email:{user.email}</p>
        </div>
    );
}
export default Destructure;