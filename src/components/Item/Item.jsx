import { Children } from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({id,name, price, description, imageUrl }) => {

  return (
    <article className="card">
      <img className="imagen_card" src={imageUrl} alt={description} />
      <h3 className="nombre_card">{name}</h3>
      <span className="precio_card">${price}</span>
      <p className="descripcion_card">{description}</p>

      <Link to={`/detail/${id}`} className="boton_detalle">
        <button>Ver detalle</button>
      </Link>
      
      <Counter item={{name, price, description, imageUrl}} />
    </article>
  );
};

export default Item;
