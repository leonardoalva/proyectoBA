import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

 useEffect(() => {
fetch('/data/products.json') 
  .then((res) => {
    if (!res.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    return res.json();
  })
  .then((data) => {
    // Aquí puedes filtrar el producto que deseas mostrar
    const product = data.find((item) => item.id === '1'); // Cambia '1' por el ID del producto que deseas
    if (product) {
      setDetail(product);
    } else {
      throw new Error('Producto no encontrado');
    }

  })
  .catch((error) => console.error('Error al cargar el detalle del producto:', error));
}, []);



  return (
<main>
  {/* Renderizado condicional basado en la carga del detalle, object.key devuelve una lista de claves, y el length verifica si hay datos */}
    {Object.keys(detail).length > 0 ? (
      <ItemDetail detail={detail} />
    ) : (
      <p>Cargando detalle del producto...</p>
    ) }
</main>
  );
};

export default ItemDetailContainer;
