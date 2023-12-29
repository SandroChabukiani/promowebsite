import React, { useState } from 'react';
import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/home';
import theme from './components/Header';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
