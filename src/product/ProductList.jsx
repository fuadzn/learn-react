import { useEffect, useRef, useState } from "react"
import Product from "./Product.jsx"

export default function ProductList() {
    const [products, setProducts] = useState([])
    // const loaded = useRef(false)
    const [load, setLoad] = useState(false)

    function handleClick() {
        setLoad(true)
    }

    useEffect(() => {
        console.log("Call use Effect with []")
    }, []);

    useEffect(() => {
        console.info('Call effect')
        if (load) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data));
        }

        return () => {
            console.log("unmount");
        }
    }, [load])

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}