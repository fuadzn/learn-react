import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <div className="flex items-center gap-3">
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
            <h2>Counter : {counter}</h2>
        </div>
    )
}