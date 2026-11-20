import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text="click me" message="this is a message"/>
                <MyButton text="smash me" onSmash={()=> alert("You smash me")}/>
                <MyButton text="hit me" onSmash={()=> alert("You hit me")}/>
            </Container>
        </StrictMode>
    )