import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`navbar ${isOpen ? "navbar--expanded" : "navbar--collapsed"}`}>
      <div className="navbar__brand">
        <h1 className="navbar__logo">Steam</h1>
      </div>
      <button
        className={`navbar__toggle${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav
        ref={menuRef}
        className={`navbar__navigation ${isOpen ? "navbar__navigation--open" : ""}`}
      >
        <ul className="navbar__menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>DLC</Link></li>
          <li><Link to="/games" onClick={() => setIsOpen(false)}>Games</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
      {/* Carrito debajo del menú */}
      <div className="navbar__actions navbar__actions--bottom">
        <Link to="/cart" className="navbar__cart">Cart (0)</Link>
      </div>
    </header>
  );
};

export default Navbar;
