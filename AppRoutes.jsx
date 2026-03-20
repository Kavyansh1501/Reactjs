import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Page/Login';
import { Dashboard } from './Page/Dashboard';
import { Home } from './Page/Home';
import { About } from './Page/About';
import { Contact } from './Page/Contact'; 
import { Nav } from './Nav';

export const AppRoutes = () => {
  return (
    <Router>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default AppRoutes;