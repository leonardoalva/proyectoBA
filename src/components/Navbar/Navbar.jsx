import React, { useState } from 'react';
import './Navbar.css'; // Archivo de estilos

const Navbar = ({
  logo = { src: '', alt: 'Logo', text: 'MiApp' },
  menuItems = [],
  isFixed = true,
  backgroundColor = '#333',
  textColor = 'white',
  hoverColor = '#555',
  onMenuItemClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (item) => {
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`navbar ${isFixed ? 'navbar-fixed' : ''}`}
      style={{ backgroundColor, color: textColor }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          {logo.src ? (
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          ) : (
            <span className="logo-text">{logo.text}</span>
          )}
        </div>

        {/* Menú para desktop */}
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a
                href={item.href || '#'}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
                style={{ 
                  color: textColor,
                  '--hover-color': hoverColor
                }}
              >
                {item.icon && <span className="navbar-icon">{item.icon}</span>}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa para mobile */}
        <button 
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        {/* Menú mobile */}
        <div className={`navbar-mobile ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
          <ul className="navbar-mobile-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar-mobile-item">
                <a
                  href={item.href || '#'}
                  className="navbar-mobile-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                >
                  {item.icon && <span className="navbar-icon">{item.icon}</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;