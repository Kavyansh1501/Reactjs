import React from 'react'

export const New = () => {
    const x={user:[{name:"kavyansh",age:25},{name:"rahul",age:26}]};
    // const {name,age}=x;
    // const y={...x,age:20};
    // const merge=[...x,...y];
  return (
    <div>
        <p align="center">{x.user[0].name}</p>
        <p align="center">{x.user[0].age}</p>
        <p align="center">{x.user[1].name}</p>
        <p align="center">{x.user[1].age}</p>
    </div>
  )
}
