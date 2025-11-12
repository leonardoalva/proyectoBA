import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ titulo }) => {
  // estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const { category } = useParams();


  useEffect(() => {
  // Simular fetch a un archivo JSON local
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          // Si la respuesta no es OK, lanzar un error
          throw new Error("Error en la respuesta");
        }
        // Parsear la respuesta JSON
        return res.json();
      })
      // Filtrar productos por categoría si se proporciona
      .then((data) => {
        if (category) {
          setProducts(data.filter((product) => product.category === category));
        } else {
          setProducts(data);
        }
      })

      // Manejar errores en la carga de datos
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, [category]);



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
