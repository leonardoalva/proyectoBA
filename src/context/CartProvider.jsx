import { CartContext } from "./CartContext";
import { useState } from "react";
import Swal from "sweetalert2";

function CartProvider({ children }) {
  // Estado del carrito arranca vacío
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (prod) => {
    // Verifica si el producto ya está en el carrito
    const isInCart = carrito.some((item) => item.id === prod.id);

    if (isInCart) {
      // Actualiza la cantidad del producto existente
      const productoRepetido = carrito.find((item) => item.id === prod.id);
      const cartSinElProducto = carrito.filter((item) => item.id !== prod.id);
      setCarrito([
        ...cartSinElProducto,
        { ...productoRepetido, count: productoRepetido.count + prod.count },
      ]);
    } else {
      // Agrega el nuevo producto al carrito
      setCarrito([...carrito, prod]);
    }

      Swal.fire({
        title: "¡Producto agregado!",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

  };

  const borrarDelCarrito = (prod) => {
    const cartSinElProducto = carrito.filter((item) => item.id !== prod.id);
    setCarrito(cartSinElProducto);
  };

  const getCant = () => {
    return carrito.reduce((acc, prod) => acc + prod.count, 0);
  };

  const getTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.count * prod.precio, 0);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        getCant,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
