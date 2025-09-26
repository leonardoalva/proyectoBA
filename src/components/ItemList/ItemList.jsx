import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (<>
    <div className="itemList_grid">
      {productos.map((prod) => (
        <Item key={prod.id} nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion} />
      ))}
    </div>
    </>
  );
};

export default ItemList;
