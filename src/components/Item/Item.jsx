import { Children } from "react";
import Counter from "../Counter/Counter";
import { Link, useLocation } from "react-router-dom";
import "./Item.css";
import React from "react";

const Item = ({ id, name, price, description, imageUrl }) => {
  // Obtener la ubicación actual para condicionales de renderizado
  const location = useLocation();

  // Mostrar el enlace de detalle solo si no estamos ya en la página de detalle
  const showDetailLink = !location.pathname.startsWith("/detail");

  // Manejo de la ruta de la imagen
  const imgSrc = imageUrl
    ? imageUrl.startsWith("/")
      ? imageUrl
      : `/${imageUrl}`
    : "/images/placeholder.png";

  return (
    <article className="card">
      
      <img className="imagen_card" 
      // Manejo de la ruta de la imagen
      src={imgSrc}
      alt={description || name} />
      
      
      <h3 className="nombre_card">{name}</h3>
      <span className="precio_card">${price}</span>
      <p className="descripcion_card">{description}</p>

      {// Mostrar el botón de detalle solo si corresponde
      }
      {showDetailLink && (
        <Link to={`/detail/${id}`} className="boton_detalle">
          <button className="btn_detalle">Ver detalle</button>
        </Link>
      )}

      <Counter item={{ id, name, price, description, imageUrl }} />
    </article>
  );
};

export default Item;
