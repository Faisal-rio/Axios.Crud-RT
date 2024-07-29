import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Create from './components/Create';
import Footer from './components/Footer';
import './index.css';
import './App.css';

const App = () => {
  const [id, setId] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
