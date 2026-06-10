import {useState, useCallback} from 'react';

function App(){

    const [count,setcount]=useState(0);
    const handleclick=useCallback(()=>{
        console.log("button clicked");
    },[]);
    return(
        <>
        <h2>{count}</h2>
        <button onClick={()=>setcount (count+1)}>increament</button>
        <button onClick={handleclick}>click me</button></>
    );
};
export default App;