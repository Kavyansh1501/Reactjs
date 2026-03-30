import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './NewPages/Login';
import { Dashboard } from './NewPages/Dashboard';
import { Navj } from './Navj';

export const Routing = () => {
  return (
    <Router>
        <Navj/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default Routing;