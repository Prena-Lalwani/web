import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import { BrowserRouter } from 'react-router-dom';
import Signup from './routes/Signup'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes> 
    </div>
  );
}


