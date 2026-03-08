import React,{useState} from 'react';
export const Code = () => {
    const [num,setnum] = useState("");
    const [num1,setnum1] = useState("");
    const [num2,setnum2] = useState("");
    
    // const fun1 = (e) => {
    //     setnum(e.target.value);
    // };
    // const fun2 = (e) => {
    //     setnum1(e.target.value);
    // };
    const fact =()=>{
        setnum2(parseInt(num)+parseInt(num1));
    };
    
    return(
        <div>
            <input type="text" name="num" value={num} onChange={(e)=>setnum(e.target.value)} />
            <input type="text" name="num1" value={num1} onChange={(e)=>setnum1(e.target.value)}/>
            <input type="text" name="num2" value={num2}/>
            <input type="button" value="submit" onClick={fact} />
        </div>
    );}
    
