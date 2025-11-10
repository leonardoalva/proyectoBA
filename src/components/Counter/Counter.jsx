import { useState } from "react";
import "./Counter.css";
import { useCart } from "../../context/useCart";


function Counter({ item, onConfirm}) {
  const [counter, setCounter] = useState(0);
  const { agregarAlCarrito } = useCart();

    const agregarItem = () => {

    if (counter > 0) {
      agregarAlCarrito({ ...item, count: counter });
    }
  };

  return (
    <div className="Counter_Container">

      <button className="btn_counter" onClick={() => setCounter(counter + 1)}>
        +
      </button>

      <p>{counter}</p>

      <button
        className="btn_counter"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        -
      </button>

      <button
        className="btn_counter"
        onClick={() => agregarItem(item)}
      >
        Agregar
      </button>
      
      {/* <button className='btn_counter' onClick={()=>setCounter(0)}>Resetear</button> */}
    </div>
  );
}

export default Counter;
