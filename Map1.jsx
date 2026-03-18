import React, { useState } from "react";
function Map1() {
    const [fruits, setfruits] = useState([{ season: "summer", name: "apple" }, { season: "winter", name: "banana" }]);
    const [newfruit, setnewfruit] = useState({ season: "", name: "" })

    const fun = (e) => {
        setnewfruit({...newfruit,name:e.target.value  })
    }
    const fun1=(e)=>{
        setnewfruit({
           ...newfruit, season:e.target.value })
    }
    const addfruits = () => {
        setfruits([...fruits, newfruit]);

    };
    return (
        <div>
            <input type="text" name="name" value={newfruit.name} onChange={fun}></input>
            <input type="text" name="season" value={newfruit.season} onChange={fun1}></input>
            <button onClick={addfruits}>AddFruits</button>

            <ul>
                {fruits.map((fruits, i) => (<li key={i}>{fruits.name}--{fruits.season}</li>
                ))}
            </ul>
        </div>
    );
}
export default Map1;