import { useState } from "react";
import "./Counter.css";

function Counter({onConfirm, btnText }) {
  const [counter, setCounter] = useState(0);

  const confirm = () => {
    if (counter > 0) {
      onConfirm(counter);
    }
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }}

  return (
    <div className="Counter_Container">
      <button
        className="btn_counter"
        disabled={counter === 0}
        onClick={decrement}
      >
        -
      </button>
      <p>{counter}</p>

      <button
        className="btn_counter"
        onClick={increment}
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

export default Counter
