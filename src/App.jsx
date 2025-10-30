import "./App.css";
import { useParams } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Inicio from "./pages/Inicio";

function App() {
  const { id } = useParams();
  const { category } = useParams();
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/contact" element={<Form />} />

          <Route
            path="/category/:category"
            element={<ItemListContainer titulo="categoria" />}
          />

          <Route
            path="/products"
            element={<ItemListContainer titulo="Todos los Productos" />}
          />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          {/* Podés agregar más rutas acá */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
