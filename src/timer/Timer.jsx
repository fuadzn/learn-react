import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(null)
    const [now, setNow] = useState(null)
    const timer = useRef(null)

    function handleStart() {
        setStart(Date.now())
        setNow(Date.now())

        timer.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    function handleStop() {
        clearInterval(timer.current)
    }

    return (
        <>
            <div>Timer : {now - start}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}