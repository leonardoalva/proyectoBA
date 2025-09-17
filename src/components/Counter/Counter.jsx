import { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0);

    return (
        <div>
            <p>valor del contador:{counter}</p>
            <button onClick={()=>setCounter(counter + 1)}>Aumentar</button>
            <button onClick={()=>setCounter(counter - 1)}>Disminuir</button>
            <button onClick={()=>setCounter(0)}>Resetear</button>
        </div>
    )
}


export default Counter