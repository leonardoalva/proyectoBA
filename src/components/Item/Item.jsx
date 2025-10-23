import { Children } from "react";
import "./item.css";

const Item = ({ name, price, description, children, imageUrl }) => {
  return (
    <article className="card">
      <img className="imagen_card" src={imageUrl} alt={description} />
      <h3 className="nombre_card">{name}</h3>
      <span className="precio_card">${price}</span>
      <p className="descripcion_card">{description}</p>
    {children}

    </article>
  );
};

export default Item;
