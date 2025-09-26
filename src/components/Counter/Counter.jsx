import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

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

      
      {/* <button className='btn_counter' onClick={()=>setCounter(0)}>Resetear</button> */}
    </div>
  );
}

export default Counter;
