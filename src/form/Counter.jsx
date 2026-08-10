import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    console.info(`Render Counter ${counter}`)

    function handleClick() {
        // setCounter(counter + 3)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        console.log(counter)
    }

    return (
        <div>
            <div className="flex items-center gap-3">
                <button onClick={handleClick}>Increment + 3</button>
            </div>
            <h2>Counter : {counter}</h2>
        </div>
    )
}