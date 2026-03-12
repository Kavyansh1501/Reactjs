import React,{useRef} from "react";
function Useref(){
    const inputRef=useRef();

    const getvalue=()=>{
        alert(inputRef.current.value);
    };
    return(
        <div>
            <input type="text" ref={inputRef}  placeholder="enter name"/>
            <button onClick={getvalue}>Get Value</button>       
        </div>
    )
};
export default Useref;