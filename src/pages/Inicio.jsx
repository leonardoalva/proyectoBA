import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  const navigate = useNavigate();
  const rippleRef = useRef(null);


  
  const handleClick = () => {
    // Inicia la animación: agregar clase que expande el círculo
    if (rippleRef.current) {
      rippleRef.current.classList.add("ripple--expand");
      // Navegar después de la animación (timing igual que en CSS)
      setTimeout(() => navigate("/products"), 600);
    } else {
      navigate("/products");
    }
  };

  return (
    <section className="inicio inicio--fullscreen">
      <div className="inicio__content">
        <h2>Fluxa</h2>
        <p>Las mejores prendas 
        para tu estilo.
        </p>
        <div className="inicio__btn-wrap">
          <button className="inicio__btn" onClick={handleClick} aria-label="Ver productos">
            <span>Ver</span>
          </button>
          <span ref={rippleRef} className="ripple" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
