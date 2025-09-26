import "./item.css";
import Counter from "../Counter/Counter";

const Item = ({ nombre, precio, descripcion }) => {
  return (
    <article className="card">
      <h3>{nombre}</h3>
      <span className="precio_card">${precio}</span>
      <p className="descripcion_card">{descripcion}</p>
      <Counter />
    </article>
  );
};

export default Item;
