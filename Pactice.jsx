import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {DefMain} from './DefMain'
import { About } from './Page/About';
import { Contact } from './Page/Contact';
import { Home } from './Page/Home';

export const Practice = () => {
  return (
    <div>
        <BrowserRouter>
            <DefMain/>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default Practice;