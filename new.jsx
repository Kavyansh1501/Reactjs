import React, { useState } from "react";
function New() {
    const [data, setdata] = useState({
        name: "john",
        age: 25,
        city: "newyork",
    });

    const updateage = () => {
        setdata({ ...data, age: 28, });
    };

    return (
        <div>
            <h1>name:{data.name}</h1>
            <h2>age:{data.age}</h2>
            <h3>city:{data.city}</h3>
            <button onClick={updateage}>update age</button>
        </div>
    );
}
export default New;