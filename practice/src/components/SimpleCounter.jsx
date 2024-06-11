import { useState } from "react";
import "../components/css/Counter.css"

function SimpleCounter() {
    const [count, setCount] = useState(0)
    const upgrade = () => {
        setCount(count-1)
    }

    return (
        <>
            
            
            <div className="box2">
                <button onClick={upgrade}>-1</button>
                {/* <button onClick={upgrade}>-10</button>
                <button onClick={upgrade}>-100</button>
                <button onClick={upgrade}>+100</button>
                <button onClick={upgrade}>+10</button>
                <button onClick={upgrade}>+1</button> */}
            </div>
        </>
    )
}

export default SimpleCounter;