import { createRoot } from "react-dom/client";
import Timer from "./Timer";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <Timer />
    </StrictMode>
)