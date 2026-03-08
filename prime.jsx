import React,{useState} from "react";
export const Prime=()=>{
    const [num,setnum] = useState("");

    const fun=(e)=>{
        setnum(e.target.value);
    }

    const fact=()=>{
        for(let i=2;i<num;i++){
            if(num%i===0){
                console.log("not prime");
                return;
            }
        }
        console.log("prime");
    }
    return(
        <div>
            <input type="text" name="num" value={num} onChange={fun} />
            <input type="button" value="submit" onClick={fact} />
        </div>
    )

}