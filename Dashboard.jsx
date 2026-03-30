import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate=useNavigate();

  const Logout=()=>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");

  }
  return (
    <div>
      <button onClick={()=>navigate(-1)}>Go back</button>
      <button onClick={Logout}>logout</button>
    </div>
  )
}
