import React, {useState} from "react";
export const Complex=()=>{
    const [r,setr] = useState("");
    const [i,seti] = useState("");
    const [r1,setr1] = useState("");
    const [i1,seti1] = useState("");
    const [num,setnum] = useState("");

    const fun=(e)=>{
        setr(e.target.value);
    }   
    const fun1=(e)=>{
        seti(e.target.value);
    }   
    const fun2=(e)=>{
        setr1(e.target.value);
    }
    const fun3=(e)=>{
        seti1(e.target.value);
    }
    const add=()=>{ 
        let real = parseInt(r) + parseInt(r1);
        let img = parseInt(i) + parseInt(i1);
        setnum(real+"+"+img+"i");
    }
    return(
        <div>
            <input type="text" name="r" placeholder="enter real no.1" value={r} onChange={fun} /> 
            <input type="text" name="i" placeholder="enter imaginary no.1" value={i} onChange={fun1} />
            <input type="text" name="r1" placeholder="enter real no.2" value={r1} onChange={fun2} />
            <input type="text" name="i1" placeholder="enter imaginary no.2" value={i1} onChange={fun3} />
            <input type="text" name="num" value={num} />
            <input type="button" value="submit" onClick={add} />
        </div>
    )
}