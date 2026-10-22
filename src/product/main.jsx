import { createRoot } from "react-dom/client";
import ProductList from "./ProductList.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ProductList />
        </StrictMode>
    )