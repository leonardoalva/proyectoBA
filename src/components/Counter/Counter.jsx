import { useState } from "react";
import "./Counter.css";
import { useCart } from "../../context/useCart";


function Counter({ item}) {
  const [counter, setCounter] = useState(0);
  const { agregarAlCarrito } = useCart();

    const agregarItem = () => {

    if (counter > 0) {
      agregarAlCarrito({ ...item, count: counter });
    }
  };

  return (
    <div>

      <p>Cantidad:{counter}</p>

      <button className="btn_counter" onClick={() => setCounter(counter + 1)}>
        Aumentar
      </button>

      <button
        className="btn_counter"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        Disminuir
      </button>

      <button
        className="btn_counter"
        onClick={() => agregarItem(item)}
      >
        Agregar al carrito
      </button>
      
      {/* <button className='btn_counter' onClick={()=>setCounter(0)}>Resetear</button> */}
    </div>
  );
}

export default Counter;
