import React from 'react'
import {useNavigate} from 'react-router-dom';

export const Home = () => {
  const navigate=useNavigate();

  const goToAbout=()=>{
    navigate("/about");
  }
   const goToLogin=()=>{
    navigate("/login");
   }
   const goToContact=()=>{
    navigate("/contact");
   }
  return (
    <div>
      <h1>home</h1>
      
      <button onClick={goToAbout}>go to about</button>
      <br/>
      <button onClick={goToLogin}>go to Login</button>
      <br/>
      <button onClick={goToContact}>go to contact</button>

    </div>
  );
};
