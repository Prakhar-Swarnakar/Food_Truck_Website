import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Navbar from './Components/NavBar';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from './Context/ShoppingCartContext';
import MyPortal from './Pages/MyPortal';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
      <Navbar />
      <Container>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/myportal" element={<MyPortal/>} />
      </Routes>
      </Container>
      <Footer />
      </ShoppingCartProvider>
    </div>
  );
}


export default App;
