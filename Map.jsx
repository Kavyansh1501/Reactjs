import React from "react";
function Map() {
    const students = [{ name: "kavyansh", age: 25 }, { name: "kishu", age: 12 }, { name: "kavya", age: 15 }];
    return (
        <div>

            <table  width="80%" border="2" cellPadding="0" cellSpacing="2">
                <tr align="center">
                    <th>Name:</th>
                    <th>Age:</th>
                </tr>
                {students.map((item) => (
                    <tr align="center">
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>

                ))}
            </table>
        </div>
    );
}
export default Map;