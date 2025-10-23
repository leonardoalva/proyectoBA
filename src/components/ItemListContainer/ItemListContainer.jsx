import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";

const ItemListContainer = ({ titulo }) => {
  // estado para almacenar los productos
  const [products, setProducts] = useState([]);


  useEffect(() => {
  // Simular fetch a un archivo JSON local
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          // Si la respuesta no es OK, lanzar un error
          throw new Error("Error en la respuesta de la red");
        }
        // Parsear la respuesta JSON
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);



  // renderizado
    return (
    <section>
      <h1 className="tituloItemList">{titulo}</h1>

      <div>
        {products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>
}
      </div>
    </section>
  );
};

export default ItemListContainer;
