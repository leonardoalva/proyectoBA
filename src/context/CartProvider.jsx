import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
 
function CartProvider({ children }) {
  // Estado del carrito arranca vacío
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (prod) => {
    if (!prod) return; // proteger contra llamadas con undefined

    const prodCount = prod.count ?? 1; // por defecto 1 si no viene
    const prodWithCount = { ...prod, count: prodCount };
    // Verifica si el producto ya está en el carrito
    const isInCart = carrito.some((item) => item && item.id === prodWithCount.id);

    if (isInCart) {
      // Actualiza la cantidad del producto existente
      const productoRepetido = carrito.find((item) => item && item.id === prodWithCount.id);
      const cartSinElProducto = carrito.filter((item) => !(item && item.id === prodWithCount.id));
      setCarrito([
        ...cartSinElProducto,
        { ...productoRepetido, count: (productoRepetido?.count ?? 0) + prodWithCount.count },
      ]);
    } else {
      // Agrega el nuevo producto al carrito
      setCarrito([...carrito, prodWithCount]);
    }
  // El logging se hace en el useEffect para reflejar el estado actualizado
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
    return carrito.reduce((acc, prod) => acc + (prod?.count ?? 0), 0);
  };

  const getTotal = () => {
    return carrito.reduce((acc, prod) => acc + ((prod?.count ?? 0) * (prod?.precio ?? 0)), 0);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  // Loggea el carrito cada vez que cambie (útil para depuración)
  useEffect(() => {
    console.log("carrito actualizado:", carrito);
  }, [carrito]);

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
