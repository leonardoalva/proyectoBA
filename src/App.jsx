import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<><p>inicio</p></>} />
          <Route path="/contact" element={<Form />} />         
           <Route path="/products" element={<ItemListContainer />} />
          {/* Podés agregar más rutas acá */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
