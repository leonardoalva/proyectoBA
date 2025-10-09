import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  const navigate = useNavigate();
  return (
    <section className="inicio">
      <h2>Bienvenido a la tienda</h2>
      <p>Encuentra los mejores juegos y DLCs aquí.</p>
      <button className="inicio__btn" onClick={() => navigate('/products')}>Ver productos</button>
    </section>
  );
};

export default Inicio;
