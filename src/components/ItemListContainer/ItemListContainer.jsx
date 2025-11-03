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
      // Actualizar el estado con los datos obtenidos
      .then((data) => setProducts(data))

      // Manejar errores en la carga de datos
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);



  // renderizado
    return (
    <main className="item-list-container">
      <h1 className="tituloItemList">{titulo}</h1>

      <div>
        {products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>
}
      </div>
    </main>
  );
};

export default ItemListContainer;
