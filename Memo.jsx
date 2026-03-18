import React,{useState,useMemo} from 'react'
 const cal = (num) => {
    console.log("heacy calculation");
    for (let i=0;i<100000;i++){}
    return num*2;
};
function Memo(){
const[num,setnum]=useState(5);
const[count,setcount]=useState(0);
const result=useMemo(()=>{
    return cal(num);
},[num]);
  return (
    <div>
        <h2>result:{result}</h2>
        <button onClick={()=> setnum(num+1)}>change number</button>
    <button onClick={()=> setcount(count+1)}>count {count} </button>
    </div>
  );
}
export default Memo;
