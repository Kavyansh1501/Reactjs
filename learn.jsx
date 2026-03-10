import React,{useState} from "react";
export const Learn=()=>{
    const [num,setnum] = useState("");
    const [num1,setnum1] = useState("");

    const fun=(e)=>{
        setnum(e.target.value);
    }

    const fact=()=>{
        for(let i=2;i<num;i++){
            if(num%i===0){
                setnum1("not prime");
                return;
            }
        }
        setnum1("prime");
    }
    return(
        <div>
            <input type="text" name="num" value={num} onChange={fun} />
            <input type="text" name="num1" value={num1} />
            <input type="button" value="submit" onClick={fact} />
        </div>
    )

}