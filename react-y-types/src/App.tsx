import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { ContainerWeb } from './Components/ContainerWeb/ContainerWeb';
import { Products } from './Components/Products/Products';




export const App = (): JSX.Element => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <ContainerWeb />
        }/>
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element='ContactPage' />
      </Routes>
    </Router>
  )
};


