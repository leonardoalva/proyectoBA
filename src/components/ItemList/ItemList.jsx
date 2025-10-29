import "./ItemList.css";
import Item from "../Item/Item";
import Counter from "../Counter/Counter";

const ItemList = ({ products }) => {


  return (<>
    <div className="itemList_grid">
      {products.map((prod) => (
        <Item key={prod.id} name={prod.name} price={prod.price} description={prod.description} >

          <Counter item={prod} />
        </Item>
      ))}
    </div>

    </>
  );
};

export default ItemList;
