import { useEffect, useRef, useState } from "react"
import Product from "./Product.jsx"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
        console.info('Call effect')
        if (loaded.current === false) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => loaded.current = true)
        }

        return () => {
            console.log("unmount");
        }
    })

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}