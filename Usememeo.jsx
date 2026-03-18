 import React, {useState ,useMemo } from "react";

 const memo=(num)=>{
    let a=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            a=a+1;
        }
    }
    if(a===2){
        return num;
    }
 };
 function Usememo(){
    const[num,setnum]=useState(1);
    const[count,setcount]=useState(0);
    const square=useMemo(()=>{
        return memo(num);
    },[num]);
    return(
        <div>
            <h2>prime:vy {square}</h2>
            <button onClick={()=> setnum(num+1)}>change number</button>           
            <button onClick={()=> setcount(count+1)}>change count:{count}</button>           
        </div>
    );
 }
 export default  Usememo;