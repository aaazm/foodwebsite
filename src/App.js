import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Home from './Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './component/Footer'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path ="/" element= {<Home/>} />
          <Route path ="/about" element= {<About />} /> 
          <Route path ="/menu" element= {<Menu />} />     
          <Route path="/contact" element={<Contact />} />   
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
