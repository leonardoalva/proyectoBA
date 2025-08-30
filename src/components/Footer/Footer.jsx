import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Mi Ecommerce. Todos los derechos reservados.</p>
        <nav className="footer__nav">
          <a href="/about">Sobre nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/terms">Términos</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
