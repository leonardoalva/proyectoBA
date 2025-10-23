import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";

const ItemListContainer = ({ titulo }) => {
  // estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("/data/products.json");
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

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
