import { createRoot } from "react-dom/client"
import Guestbook from "./Guestbook"
import { StrictMode } from "react"


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Guestbook />
    </StrictMode>
)