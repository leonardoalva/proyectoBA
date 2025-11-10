import { useState } from "react";
import "./Counter.css";

function Counter({onConfirm, btnText }) {
  const [counter, setCounter] = useState(0);

  const confirm = () => {
    if (counter > 0) {
      onConfirm(counter);
    }
  };

  return (
    <div className="Counter_Container">
      <button
        className="btn_counter"
        disabled={counter === 0}
        onClick={() => {
          if (counter > 0) setCounter((prev) => prev - 1);
        }}
      >
        -
      </button>
      <p>{counter}</p>

      <button
        className="btn_counter"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>

      <button className="btn_counter" onClick={confirm} disabled ={counter === 0}>
        {btnText}
      </button>

      {/* <button className='btn_counter' onClick={()=>setCounter(0)}>Resetear</button> */}
    </div>
  );
}

export default Counter;
