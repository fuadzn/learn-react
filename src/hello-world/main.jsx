import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container.jsx";
import HelloWorld from "./HelloWorld.jsx";
import Table from "../table/Table.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <Table />
        </Container>
    </StrictMode>
)