import React, { useState } from "react";
import "./Navbar.css"; // Archivo de estilos

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <h2>Logo</h2>
        </div>
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">DLC</a></li>
          <li><a href="/about">juegos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
        <div className="navbar__cart">
          <a href="/cart">Carrito (0)</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
