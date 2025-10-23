import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (<>
    <div className="itemList_grid">
      {products.map((prod) => (
        <Item key={prod.id} name={prod.name} price={prod.price} description={prod.description} >
          <button className="btn_agregar">Agregar al carrito</button>
        </Item>
      ))}
    </div>
    <p> 
      Total de productos: {products.length}
    </p>
    </>
  );
};

export default ItemList;
