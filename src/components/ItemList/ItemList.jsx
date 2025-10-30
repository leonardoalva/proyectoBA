import "./ItemList.css";
import Item from "../Item/Item";
import Counter from "../Counter/Counter";

const ItemList = ({ products }) => {


  return (<>
    <div className="itemList_grid">
      {products.map((prod) => (
        
        <Item key={prod.id} {...prod} />

        
      ))}
    </div>

    </>
  );
};

export default ItemList;
