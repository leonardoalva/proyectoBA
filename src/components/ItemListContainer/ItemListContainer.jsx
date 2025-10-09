import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ titulo, productos }) => {
  // estado
  //logica 
 



    return (
    <section>
      <h1 className="tituloItemList">{titulo}</h1>

      <div>
        {productos.length > 0 ? <ItemList productos={productos} /> : <p>Cargando productos...</p>
}
      </div>
      <p>Se encontraron {productos.length} productos.</p>
    </section>
  );
};

export default ItemListContainer;
