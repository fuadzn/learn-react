import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "./Container";
import { StrictMode } from "react";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Container>
                <TodoList />
            </Container>
        </StrictMode>
    );