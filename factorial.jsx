import React,{useState} from "react";
export const Factorial=()=>{
    const [num,setnum] = useState("");

    const fun=(e)=>{
        setnum(e.target.value);
    };

    const fact=()=>{
        let f=1;
        for(let i=1;i<=num;i++){
            f=f*i;
        }
        console.log(f);
    };
    return(
        <div>
            <input type="text" name="num" value={num} onChange={fun}/>
            <input type="button" value="submit" onClick={fact} />
            
        </div>
    )
}
