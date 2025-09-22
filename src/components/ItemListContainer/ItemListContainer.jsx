import "./ItemListContainer.css";

const ItemListContainer = ({ titulo, productos }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <p>Todos los ESports en un solo lugar </p>

      <div className="itemList_grid">
        {productos.map((prod) => (
          <article key={prod.id}>
            <h3>{prod.nombre}</h3>
            <span className="precio_card">${prod.precio}</span>
            <p className="descripcion_card">{prod.descripcion}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
