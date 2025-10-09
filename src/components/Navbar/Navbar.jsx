import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
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
          <h1 className="navbar__logo">Steam</h1>
        </div>

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

          <Link to="/cart" className="navbar__cart">Cart (0)</Link>
        </div>
      </div>

      {/* Menú expandible */}
      <nav ref={menuRef} className="navbar__navigation">
        <ul className="navbar__menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>DLC</Link></li>
          <li><Link to="/games" onClick={() => setIsOpen(false)}>Games</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
