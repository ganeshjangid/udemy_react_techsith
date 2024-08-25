import { useState } from "react";

function CountCal() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Calculation</h2>
            <h5>Total Count : {count}</h5>
            <div className="container">
            <button onClick={()=> setCount(count+1)} className="btnCount">Plus +</button>
            <button onClick={()=> setCount(count-1)}  className="btnCount">Minus -</button>
            <button onClick={()=> setCount(0)}  className="btnCount">Reset</button>
            </div>

        </>

    )
}

export default CountCal;