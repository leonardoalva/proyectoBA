import React, { useState, useRef, useEffect } from "react";
import {useCart} from '../../context/useCart';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { cart, getCant } = useCart();
  // número total de items (suma de las cantidades 'count' en cada producto)
  const cartItems = typeof getCant === "function" ? getCant() : (cart ? cart.length : 0);
  

  useEffect(() => {
    // Cierra el menú si se hace clic fuera de él
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    // Agrega el listener
    document.addEventListener("mousedown", handleClickOutside);
    // Limpia el listener al desmontar el componente
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Oculta el navbar en la página de inicio (ruta "/")
  if (location && location.pathname === "/") {
    return null;
  }

  return (
    <header className={`navbar ${isOpen ? "navbar--expanded" : "navbar--collapsed"}`}>
      {/* Logo + botón + carrito siempre visibles */}
      <div className="navbar__top">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">Cultivate</Link>
        </div>
        {/* Botón de menú */}
        <div className="navbar__right">
          <button
            className={`navbar__toggle${isOpen ? " open" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          {/* Icono del carrito */}
          <Link to="/cart" className="navbar__cart">Cart ({cartItems})</Link>
        </div>
      </div>

      {/* Menú expandible */}
      <nav ref={menuRef} className="navbar__navigation">
        <ul className="navbar__menu">
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/games" onClick={() => setIsOpen(false)}>Quienes somos?</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
