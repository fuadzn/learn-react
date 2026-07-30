import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container.jsx";
import HelloWorld from "./HelloWorld.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <Table />
            <AlertButton text="Click Me!" message="Hello World" />
            <MyButton text="On Smash" onSmash={() => alert("Smash nihhh!!!")} />
        </Container>
    </StrictMode>
)