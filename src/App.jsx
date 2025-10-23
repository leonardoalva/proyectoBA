import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Form from "./components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Inicio from "./pages/Inicio";

function App() {


  return (
    <>
      <Navbar />
      <main>
        <Routes>

          <Route path="/" element={<Inicio />} />

          <Route path="/contact" element={<Form />} />

          <Route
            path="/products"
            element={
              <ItemListContainer
                titulo="Todos los Productos"
              />
            }
          />

        
          {/* Podés agregar más rutas acá */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
