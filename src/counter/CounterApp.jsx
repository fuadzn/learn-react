import { useState } from "react"
import Counter from "./Counter"

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleChange(e){
        setShow2(e.target.checked)
    }

    return (
        <div>
            {/* <Counter name="A"/>
            {show2 && <Counter name="B"/>} */}
            {/* {show2 ? <Counter name="A"/> : <Counter name="B"/>} */}
            {/* {show2 ? <Counter name="Fuad"/> : <p>Hilang</p>} */}
            {/* {show2 ? (
                <div>
                    <Counter name="Fuad"/>
                </div>
            ) : (
                <section>
                    <Counter name="Budi"/>
                </section>
            )} */}
            {/* {!show2 && <Counter name="Fuad"/>}
            {show2 && <Counter name="Budi"/>} */}
            {show2 ? <Counter key="fuad" name="Fuad"/> : <Counter key="budi" name="Budi"/>}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
        </div>
    )
}